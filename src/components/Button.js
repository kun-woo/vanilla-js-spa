import { setPosition } from 'src/utils/localStorage';

const reorderDraggables = (draggable, dropzone, draggableParent, dropzoneChild) => {
  const dragIndex = Number(draggable.dataset.dragIndex);
  const dropIndex = Number(dropzone.dataset.dropIndex);

  const dropzones = draggable.parentNode.parentNode.childNodes;
  const draggables = Array.from(dropzones).map((element) => element.firstChild);

  dropzone.appendChild(draggable);

  if (dropIndex === 0 && dragIndex === draggables.length - 1) {
    draggables.forEach((element) => {
      if (element.dataset.dragIndex !== draggable.dataset.dragIndex) {
        dropzones[Number(element.dataset.dragIndex) + 1].appendChild(element);
      }
    });
  } else if (dropIndex === dropzones.length - 1 && dragIndex === 0) {
    draggables.forEach((element) => {
      if (element.dataset.dragIndex !== draggable.dataset.dragIndex) {
        dropzones[Number(element.dataset.dragIndex) - 1].appendChild(element);
      }
    });
  } else {
    draggableParent.appendChild(dropzoneChild);
  }

  dropzones.forEach((element) => {
    const newDragIndex = element.dataset.dropIndex;
    element.firstChild.dataset.dragIndex = newDragIndex;

    setPosition(element.firstChild.dataset.id, newDragIndex);
  });
};

const Button = ({
  dragIndex, draggable,
  id,
  innerText,
  onClick,
  onDragStart, onDragEnd, onDragOver, onDrop,
  style,
  className
} = {}) => {
  const element = document.createElement('button');

  Object.keys(style).forEach((property) => {
    element.style[property] = style[property];
  });

  if (Number(dragIndex) >= 0) {
    element.dataset.dragIndex = dragIndex;
  }

  if (id) {
    element.dataset.id = id;
  }

  if (innerText) {
    element.innerText = innerText;
  }

  if (className) {
    element.className = className;
  }

  const _onDragStart = (event) => {
    if (event.target === element) {
      element.parentNode.parentNode.childNodes.forEach((child) => {
        child.classList.add('active');
      });
      event.dataTransfer.setData('text/plain', event.target.dataset.dragIndex);
    }
  };

  const _onDragEnd = (event) => {
    if (event.target === element) {
      element.parentNode.parentNode.childNodes.forEach((child) => {
        child.classList.remove('active');
      });
    }
  };

  const _onDragOver = (event) => {
    event.preventDefault();
  };

  const _onDrop = (event) => {
    event.preventDefault();

    if (event.target === element.parentNode || event.target === element) {
      const index = event.dataTransfer.getData('text');
      const draggableEl = document.querySelector(`[data-drag-index='${index}']`);
      const draggableElParent = draggableEl.parentNode;
      const dropzone = event.target === element.parentNode
        ? event.target
        : event.target.parentNode;
      const dropzoneFirstChild = dropzone.firstChild;

      reorderDraggables(draggableEl, dropzone, draggableElParent, dropzoneFirstChild);

      event.dataTransfer.clearData();
    }
  };

  if (draggable) {
    element.className = 'draggable';
    element.setAttribute('draggable', true);

    document.addEventListener('dragstart', onDragStart || _onDragStart, false);
    document.addEventListener('dragend', onDragEnd || _onDragEnd, false);
    document.addEventListener('dragover', onDragOver || _onDragOver, false);
    document.addEventListener('drop', onDrop || _onDrop, false);
  }

  if (onClick) {
    document.addEventListener('click', (event) => {
      if (event.target === element) {
        onClick(event);
      }
    }, false);
  }

  return element;
};

export default Button;
