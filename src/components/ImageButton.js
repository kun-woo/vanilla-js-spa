const ImageButton = ({
  id, image, onClick, style, className
} = {}) => {
  const element = document.createElement('button');
  const imageElement = document.createElement('img');

  Object.keys(style).forEach((property) => {
    element.style[property] = style[property];
  });

  if (id) {
    element.dataset.id = id;
  }

  if (className) {
    element.className = className;
  }

  if (onClick) {
    document.addEventListener('click', (event) => {
      if (event.target === element || event.target === imageElement) {
        onClick(event);
        element.parentNode.parentNode.childNodes.forEach((listItem) => {
          if (listItem.firstChild) {
            listItem.firstChild.classList.remove('active');
          }
        });
        element.classList.add('active');
      }
    }, false);
  }

  if (image) {
    imageElement.src = image;
    imageElement.style.objectFit = 'cover';
    imageElement.style.width = '100%';
    imageElement.style.height = '100%';
    imageElement.style.borderRadius = '10px';

    element.appendChild(imageElement);
  }

  return element;
};

export default ImageButton;
