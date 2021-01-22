import Box from 'src/components/Box';
import Button from 'src/components/Button';
import Link from 'src/components/Link';
import MainLayout from 'src/layouts/MainLayout';
import { appendChildByIndex, appendChildAndReturnParent } from 'src/utils/dom';
import { getPosition } from 'src/utils/localStorage';
import { setContext } from 'src/utils/context';

const buttonStyle = {
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '55px',
  minHeight: '55px',
};

const onClick = (path) => () => {
  Link({ path });
};

const HomeView = () => {
  const position = getPosition();

  const box = Box({
    mb: 20, htmlTag: 'main'
  });
  const list = Box({
    display: 'flex', alignItems: 'center', htmlTag: 'ul'
  });

  const alarmButtonWrapper = Box({
    px: 20, pb: 30, mr: 15, dropIndex: position.alarm, className: 'dropzone', htmlTag: 'li'
  });
  const memoButtonWrapper = Box({
    px: 20, pb: 30, mr: 15, dropIndex: position.memo, className: 'dropzone', htmlTag: 'li'
  });
  const photoButtonWrapper = Box({
    px: 20, pb: 30, mr: 15, dropIndex: position.photo, className: 'dropzone', htmlTag: 'li'
  });

  const alarmButton = Button({
    dragIndex: position.alarm,
    draggable: true,
    id: 'alarm',
    innerText: 'Alarm',
    onClick: onClick('/alarm'),
    style: buttonStyle
  });
  const memoButton = Button({
    dragIndex: position.memo,
    draggable: true,
    id: 'memo',
    innerText: 'Memo',
    onClick: onClick('/memo'),
    style: buttonStyle
  });
  const photoButton = Button({
    dragIndex: position.photo,
    draggable: true,
    id: 'photo',
    innerText: 'Photo',
    onClick: onClick('/photo'),
    style: buttonStyle
  });

  alarmButtonWrapper.appendChild(alarmButton);
  memoButtonWrapper.appendChild(memoButton);
  photoButtonWrapper.appendChild(photoButton);

  appendChildByIndex(list, alarmButtonWrapper, position.alarm);
  appendChildByIndex(list, memoButtonWrapper, position.memo);
  appendChildByIndex(list, photoButtonWrapper, position.photo);

  box.appendChild(list);

  setContext({
    title: 'Vanilla JS SPA - Home',
    meta: {
      description: 'Drag and Drop feature is present for navigation buttons.'
    },
    showBackButton: false,
    showNewButton: false
  });

  return appendChildAndReturnParent(MainLayout, box);
};

export default HomeView;
