import Box from 'src/components/Box';
import Button from 'src/components/Button';
import { setAlarms } from 'src/utils/localStorage';

const renderMeridiem = (meridiem) => (meridiem === 'am' ? '오전' : '오후');

const renderTime = (timeStr) => (Number(timeStr) < 10 ? `0${timeStr}` : timeStr);

const AlarmField = ({
  meridiem, hour, minute, createdTime, deleteButtonStyle, setTimeouts
} = {}) => {
  const box = Box({
    display: 'flex', alignItems: 'center', pl: 30, pr: 20, htmlTag: 'li'
  });
  const deleteButton = Button({ style: deleteButtonStyle });
  const timeCopy = document.createElement('p');

  box.style.backgroundColor = '#ffffff';
  box.style.fontSize = '20px';
  box.style.width = '100%';
  box.style.borderTop = '3px solid #4748f6';
  box.style.maxHeight = '45px';

  deleteButton.innerText = 'Delete';

  timeCopy.innerHTML = `${renderMeridiem(meridiem)} ${renderTime(hour)}시 ${renderTime(minute)}분`;
  timeCopy.style.marginRight = 'auto';

  document.addEventListener('click', (event) => {
    if (event.target === deleteButton) {
      box.parentNode.removeChild(box);

      setAlarms((oldAlarms) => oldAlarms.filter(
        (oldAlarm) => oldAlarm.createdTime !== createdTime
      ));

      setTimeouts((oldTimeouts) => {
        const newTimeouts = [];

        oldTimeouts.forEach(({ createdTime: newCreatedTime, setTimeout }) => {
          if (newCreatedTime === createdTime) {
            clearTimeout(setTimeout);
          } else {
            newTimeouts.push({ createdTime: newCreatedTime, setTimeout });
          }
        });

        return newTimeouts;
      });
    }
  }, false);

  box.appendChild(timeCopy);
  box.appendChild(deleteButton);
  return box;
};

export default AlarmField;
