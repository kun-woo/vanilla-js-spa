import Box from 'src/components/Box';
import { alarmAdd } from 'src/utils/events';
import ids from 'src/utils/ids';
import { setAlarms } from 'src/utils/localStorage';

const TimeField = ({ saveButton } = {}) => {
  const box = Box({
    display: 'flex', alignItems: 'center', pl: 5, pr: 20
  });

  const meridiemBox = Box({ display: 'flex', alignItems: 'center', mr: 7.5 });
  const meridiem = document.createElement('select');
  const am = document.createElement('option');
  const pm = document.createElement('option');

  const hourBox = Box({ display: 'flex', alignItems: 'center', mr: 7.5 });
  const hour = document.createElement('select');
  const hourCopy = document.createElement('p');

  const minuteBox = Box({ display: 'flex', alignItems: 'center' });
  const minute = document.createElement('select');
  const minuteCopy = document.createElement('p');

  box.dataset.id = ids.timeField;

  box.style.backgroundColor = '#ffffff';
  box.style.fontSize = '14px';
  box.style.width = '100%';
  box.style.borderTop = '3px solid #4748f6';
  box.style.maxHeight = '55px';

  am.innerText = '오전';
  am.value = 'am';
  pm.innerText = '오후';
  pm.value = 'pm';

  meridiem.appendChild(am);
  meridiem.appendChild(pm);

  meridiemBox.appendChild(meridiem);

  hourCopy.innerText = '시';
  hourCopy.style.fontSize = '20px';

  for (let i = 0; i < 13; i++) {
    const option = `<option value='${i}'>${i < 10 ? `0${i}` : i}</option>`;
    hour.innerHTML += option;
  }

  hourBox.appendChild(hour);
  hourBox.appendChild(hourCopy);

  minuteBox.style.marginRight = 'auto';

  minuteCopy.innerText = '분';
  minuteCopy.style.fontSize = '20px';

  for (let i = 0; i < 60; i += 10) {
    const option = `<option value='${i}'>${i < 10 ? `0${i}` : i}</option>`;
    minute.innerHTML += option;
  }

  document.addEventListener('click', (event) => {
    if (event.target === saveButton) {
      const today = new Date();
      const alarm = {
        meridiem: meridiem.value,
        hour: hour.value,
        minute: minute.value,
        createdTime: today.getTime()
      };

      setAlarms((oldAlarms) => ([...oldAlarms, alarm]));

      box.parentNode.removeChild(box);

      document.dispatchEvent(new Event(alarmAdd));
    }
  }, false);

  minuteBox.appendChild(minute);
  minuteBox.appendChild(minuteCopy);

  box.appendChild(meridiemBox);
  box.appendChild(hourBox);
  box.appendChild(minuteBox);
  box.appendChild(saveButton);

  return box;
};

export default TimeField;
