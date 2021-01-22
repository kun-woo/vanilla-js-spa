const Container = ({ maxWidth } = {}) => {
  const element = document.createElement('div');

  element.style.height = '100%';
  element.style.width = '100%';
  element.style.marginLeft = 'auto';
  element.style.marginRight = 'auto';
  element.style.maxWidth = `${maxWidth || ''}px`;
  element.style.minHeight = '852px';

  return element;
};

export default Container;
