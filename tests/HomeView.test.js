test('Check HomeView to have buttons', () => {
  const HomeViewObject = require('src/views/home/HomeView/index.js');
  const HomeView = (HomeViewObject.default)();

  const alarmButton = HomeView.querySelector('[data-id="alarm"]');
  const memoButton = HomeView.querySelector('[data-id="memo"]');
  const photoButton = HomeView.querySelector('[data-id="photo"]');

  expect(alarmButton).toBeTruthy();
  expect(memoButton).toBeTruthy();
  expect(photoButton).toBeTruthy();
});
