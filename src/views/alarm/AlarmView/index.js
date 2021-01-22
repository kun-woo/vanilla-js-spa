import Box from 'src/components/Box';
import Button from 'src/components/Button';
import MainLayout from 'src/layouts/MainLayout';
import { setContext } from 'src/utils/context';
import { appendChildAndReturnParent } from 'src/utils/dom';
import { alarmAdd } from 'src/utils/events';
import ids from 'src/utils/ids';
import { getAlarms, setAlarms } from 'src/utils/localStorage';
import AlarmField from './AlarmField';
import TimeField from './TimeField';

const saveButtonStyle = {
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  border: '1px solid #8cbfe1',
  color: '#8cbfe1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '35px',
  minHeight: '30px',
  fontWeight: 700
};

const deleteButtonStyle = {
  ...saveButtonStyle,
  border: '1px solid #ef9c86',
  color: '#ef9c86',
  fontSize: '14px',
};

const setAlarmActions = ({
  today, meridiem, hour, minute
}) => {
  const thisHour = today.getHours();
  const thisMinute = today.getMinutes();
  const thisSecond = today.getSeconds();
  const createdTime = today.getTime();
  const thisTime = (
    thisHour * 3600 * 1000
    + thisMinute * 60 * 1000
    + thisSecond * 1000
  );
  const alertHour = (
    meridiem === 'am'
      ? Number(hour)
      : Number(hour) === 12
        ? Number(hour)
        : Number(hour) + 12
  );
  const alertMinute = Number(minute);
  const alertTime = (
    alertHour * 3600 * 1000
    + alertMinute * 60 * 1000
  );
  const timeout = (
    alertTime - thisTime < 0
      ? alertHour === thisHour && alertMinute === thisMinute
        ? 0
        : 24 * 3600 * 1000 + alertTime - thisTime
      : alertTime - thisTime
  );

  return ({
    createdTime,
    setTimeout: setTimeout(() => {
      const newToday = new Date();
      const newThisHour = newToday.getHours();
      const newHour = newThisHour > 12 ? newThisHour - 12 : newThisHour;
      const newMinute = newToday.getMinutes();
      const newMeridiem = newThisHour > 12 ? '오후' : '오전';
      const displayedHour = newHour < 10 ? `0${newHour}` : newHour;
      const displayedMinute = newMinute < 10 ? `0${newMinute}` : newMinute;

      // eslint-disable-next-line no-alert
      alert(`Now is the time: ${newMeridiem} ${displayedHour}시 ${displayedMinute}분`);

      setAlarms((oldAlarms) => oldAlarms.filter(
        (oldAlarm) => oldAlarm.createdTime !== createdTime
      ));

      document.dispatchEvent(new Event(alarmAdd));
    }, timeout)
  });
};

const appendAlarms = ({
  alarms, box, setTimeouts
}) => {
  const newTimeOuts = [];
  const alarmBox = Box({ htmlTag: 'ul' });

  alarmBox.dataset.id = ids.alarmBox;
  alarmBox.style.width = '100%';

  alarms.forEach((alarm) => {
    newTimeOuts.push(setAlarmActions({ ...alarm, today: new Date() }));
    alarmBox.appendChild(AlarmField({ ...alarm, deleteButtonStyle, setTimeouts }));
  });

  setTimeouts(() => newTimeOuts);

  if (box.lastChild.dataset.id === ids.alarmBox) {
    box.removeChild(box.lastChild);
  }

  box.appendChild(alarmBox);
};

const onNewButtonClick = (element) => () => {
  const saveButton = Button({ innerText: 'Save', style: saveButtonStyle });
  const timeField = TimeField({ saveButton });

  if (element.firstChild.dataset.id === ids.timeField) {
    element.removeChild(element.firstChild);
  }
  element.insertBefore(timeField, element.firstChild);
};

const AlarmView = () => {
  let timeouts = [];

  const box = Box({
    display: 'flex', alignItems: 'center', flexDirection: 'column', htmlTag: 'main'
  });
  const saveButton = Button({ innerText: 'Save', style: saveButtonStyle });
  const timeField = TimeField({ saveButton });

  const setTimeouts = (setNewTimeouts) => {
    timeouts = setNewTimeouts(timeouts);
  };

  setContext({
    title: 'Vanilla JS SPA - Alarm',
    meta: { description: 'Add alarms using a time field.' },
    showBackButton: true,
    showNewButton: true,
    onNewButtonClick: onNewButtonClick(box)
  });

  box.appendChild(timeField);

  appendAlarms({
    alarms: getAlarms(), box, setTimeouts
  });

  document.addEventListener('alarmadd', () => {
    appendAlarms({
      alarms: getAlarms(), box, setTimeouts
    });
  }, false);

  return appendChildAndReturnParent(MainLayout, box);
};

export default AlarmView;
