import Box from 'src/components/Box';
import { memoAdd } from 'src/utils/events';
import ids from 'src/utils/ids';
import { setMemos } from 'src/utils/localStorage';

const TextField = () => {
  const box = Box({
    display: 'flex', alignItems: 'center'
  });
  const input = document.createElement('input');

  box.dataset.id = ids.textField;

  box.style.backgroundColor = '#ffffff';
  box.style.fontSize = '18px';
  box.style.width = '100%';
  box.style.borderTop = '3px solid #4748f6';
  box.style.maxHeight = '55px';

  input.placeholder = 'Type in some texts.';
  input.style.width = '100%';
  input.style.height = '55px';

  document.addEventListener('keydown', (event) => {
    if (event.target === input && event.key === 'Enter') {
      setMemos((oldMemos) => ([...oldMemos, { memo: input.value }]));

      box.parentNode.removeChild(box);

      document.dispatchEvent(new Event(memoAdd));
    }
  }, false);

  box.appendChild(input);

  return box;
};

export default TextField;
