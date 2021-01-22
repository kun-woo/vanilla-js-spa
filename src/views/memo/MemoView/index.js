import Box from 'src/components/Box';
import MainLayout from 'src/layouts/MainLayout';
import { setContext } from 'src/utils/context';
import { appendChildAndReturnParent } from 'src/utils/dom';
import ids from 'src/utils/ids';
import { getMemos } from 'src/utils/localStorage';
import MemoField from './MemoField';
import TextField from './TextField';

const appendMemos = (memos, box) => {
  const memoBox = Box({ htmlTag: 'ul' });

  memoBox.dataset.id = ids.memoBox;
  memoBox.style.width = '100%';

  memos.forEach((memo) => {
    memoBox.appendChild(MemoField({ ...memo }));
  });

  if (box.lastChild.dataset.id === ids.memoBox) {
    box.removeChild(box.lastChild);
  }

  box.appendChild(memoBox);
};

const onNewButtonClick = (element) => () => {
  const textField = TextField();

  if (element.firstChild.dataset.id === ids.textField) {
    element.removeChild(element.firstChild);
  }
  element.insertBefore(textField, element.firstChild);
};

const MemoView = () => {
  const box = Box({
    display: 'flex', alignItems: 'center', flexDirection: 'column', htmlTag: 'main'
  });
  const textField = TextField();

  box.appendChild(textField);

  appendMemos(getMemos(), box);

  document.addEventListener('memoadd', () => {
    appendMemos(getMemos(), box);
  }, false);

  setContext({
    title: 'Vanilla JS SPA - Memo',
    meta: {
      description: 'Add a memo with a text field.'
    },
    showBackButton: true,
    showNewButton: true,
    onNewButtonClick: onNewButtonClick(box)
  });

  return appendChildAndReturnParent(MainLayout, box);
};

export default MemoView;
