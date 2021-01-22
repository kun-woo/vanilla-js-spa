import Box from 'src/components/Box';

const MemoField = ({ memo }) => {
  const box = Box({
    px: 2, py: 1, className: 'memobox', htmlTag: 'li'
  });

  box.style.backgroundColor = '#ffffff';
  box.style.fontSize = '20px';
  box.style.width = '100%';
  box.style.borderTop = '3px solid #4748f6';

  box.innerHTML = `${memo}`;

  document.addEventListener('click', (event) => {
    if (event.target === box) {
      box.classList.add('show');
      box.parentNode.childNodes.forEach((sibling) => {
        if (sibling !== box) {
          sibling.classList.remove('show');
        }
      });
    }
  }, false);

  return box;
};

export default MemoField;
