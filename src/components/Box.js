const Box = ({
  m, mt, mr, mb, ml, mx, my, p, pt, pr, pl, pb, px, py,
  display, justifyContent, alignItems, flexDirection,
  dropIndex,
  htmlTag,
  className
} = {}) => {
  const element = document.createElement(htmlTag || 'div');

  element.style.marginTop = `${mt || my || m || ''}px`;
  element.style.marginRight = `${mr || mx || m || ''}px`;
  element.style.marginBottom = `${mb || my || m || ''}px`;
  element.style.marginLeft = `${ml || mx || m || ''}px`;

  element.style.paddingTop = `${pt || py || p || ''}px`;
  element.style.paddingRight = `${pr || px || p || ''}px`;
  element.style.paddingBottom = `${pb || py || p || ''}px`;
  element.style.paddingLeft = `${pl || px || p || ''}px`;

  if (display) {
    element.style.display = display;
  }

  if (justifyContent) {
    element.style.justifyContent = justifyContent;
  }

  if (alignItems) {
    element.style.alignItems = alignItems;
  }

  if (flexDirection) {
    element.style.flexDirection = flexDirection;
  }

  if (className) {
    element.className = className;
  }

  if (Number(dropIndex) >= 0) {
    element.dataset.dropIndex = dropIndex;
  }

  return element;
};

export default Box;
