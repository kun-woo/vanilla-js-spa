test('Check MemoView to have a text input field', () => {
  const MemoViewObject = require('src/views/memo/MemoView/index.js');
  const MemoView = (MemoViewObject.default)();

  const textField = MemoView.querySelector('input');

  expect(textField).toBeTruthy();
});
