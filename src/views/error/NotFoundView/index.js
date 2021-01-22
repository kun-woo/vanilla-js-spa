import Box from 'src/components/Box';
import Button from 'src/components/Button';
import Link from 'src/components/Link';
import MainLayout from 'src/layouts/MainLayout';
import { setContext } from 'src/utils/context';
import { appendChildAndReturnParent } from 'src/utils/dom';
import errorImg from 'public/static/images/error-404.svg';

const buttonStyle = {
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '55px',
  minHeight: '55px',
  marginTop: '10px',
};

const onClick = (path) => () => {
  Link({ path });
};

const NotFoundView = () => {
  const box = Box({
    my: 20, display: 'flex', alignItems: 'center', flexDirection: 'column'
  });
  const errorImage = document.createElement('img');
  const errorCopy = document.createElement('h1');
  const backHome = Button({
    innerText: '홈으로 돌아가기',
    onClick: onClick('/'),
    style: buttonStyle
  });

  errorCopy.innerText = '찾으시는 페이지가 없습니다.';
  errorCopy.style.color = '#ffffff';

  errorImage.src = errorImg;
  errorImage.style.width = '200px';
  errorImage.style.height = '200px';
  errorImage.style.backgroundColor = '#ffffff';
  errorImage.style.borderRadius = '5px';

  box.appendChild(errorCopy);
  box.appendChild(errorImage);
  box.appendChild(backHome);

  setContext({
    title: 'Vanilla JS SPA - 404 Not Found',
    meta: { description: 'Display 404 Not found error.' },
    showBackButton: false,
    showNewButton: false
  });

  return appendChildAndReturnParent(MainLayout, box);
};

export default NotFoundView;
