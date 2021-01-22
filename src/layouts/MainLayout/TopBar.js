import Box from 'src/components/Box';
import Button from 'src/components/Button';
import { getContext } from 'src/utils/context';

const buttonStyle = {
  border: '1px solid #8cbfe1',
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  color: '#8cbfe1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '55px',
  minHeight: '25px',
  fontSize: '14px',
  fontWeight: 700,
  textTransform: 'uppercase',
};

const onBackButtonClick = () => {
  window.history.back();
};

const renderTime = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  return `${year}년 ${month}월 ${date}일 ${hours}시 ${minutes}분 ${seconds}초`;
};

const TopBar = ({ className } = {}) => {
  const element = document.createElement('header');
  const clock = document.createElement('div');
  const nav = Box({ pt: 5, htmlTag: 'nav' });
  const list = Box({
    display: 'flex', justifyContent: 'center', htmlTag: 'ul'
  });

  const { showBackButton, showNewButton, onNewButtonClick } = getContext();

  setInterval(() => {
    clock.innerHTML = renderTime();
  }, 1000);

  clock.innerHTML = renderTime();
  clock.style.color = '#ffffff';
  clock.style.minHeight = '25px';
  clock.style.display = 'flex';
  clock.style.alignItems = 'center';

  element.style.fontSize = '16px';
  element.style.marginBottom = '10px';

  list.style.position = 'relative';

  if (className) {
    element.className = className;
  }

  if (showBackButton) {
    const backButton = Button({
      innerText: 'back',
      style: buttonStyle,
      onClick: onBackButtonClick
    });
    const backButtonWrapper = Box({ htmlTag: 'li' });

    backButtonWrapper.style.position = 'absolute';
    backButtonWrapper.style.left = '10px';

    backButtonWrapper.appendChild(backButton);
    list.appendChild(backButtonWrapper);
  }

  list.appendChild(clock);

  if (showNewButton) {
    const newButton = Button({
      innerText: 'new',
      style: buttonStyle,
      onClick: onNewButtonClick
    });
    const newButtonWrapper = Box({ htmlTag: 'li' });

    newButtonWrapper.style.position = 'absolute';
    newButtonWrapper.style.right = '10px';

    newButtonWrapper.appendChild(newButton);

    list.appendChild(newButtonWrapper);
  }

  nav.appendChild(list);
  element.appendChild(nav);

  return element;
};

export default TopBar;
