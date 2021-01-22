test('Check PhotoView to have to 10 thumbnails', () => {
  const PhotoViewObject = require('src/views/photo/PhotoView/index.js');
  const PhotoView = (PhotoViewObject.default)();

  const slider = PhotoView.querySelector('.no-scrollbar');

  expect(slider.querySelectorAll('img')).toHaveLength(10);
});
