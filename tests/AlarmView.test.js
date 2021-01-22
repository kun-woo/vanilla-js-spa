test('Check AlarmView to have alarm meridiem select field', () => {
  const AlarmViewObject = require('src/views/alarm/AlarmView/index.js');
  const AlarmView = (AlarmViewObject.default)();

  const meridiem = AlarmView.querySelector('select');

  // 오전, 오후
  expect(meridiem.childNodes).toHaveLength(2);
});
