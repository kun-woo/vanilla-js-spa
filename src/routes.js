import AlarmView from 'src/views/alarm/AlarmView';
import HomeView from 'src/views/home/HomeView';
import MemoView from 'src/views/memo/MemoView';
import NotFoundView from 'src/views/error/NotFoundView';
import PhotoView from 'src/views/photo/PhotoView';

const routes = [
  { path: '/', element: HomeView },
  { path: '/home', element: HomeView },
  { path: '/memo', element: MemoView },
  { path: '/alarm', element: AlarmView },
  { path: '/photo', element: PhotoView },
  { path: '*', element: NotFoundView },
];

export default routes;
