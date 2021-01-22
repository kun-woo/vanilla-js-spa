import Container from 'src/components/Container';
import Helmet from 'src/components/Helmet';
import { getContext } from 'src/utils/context';
import TopBar from './TopBar';

const MainLayout = ({ childElement } = {}) => {
  const container = Container({ maxWidth: 375 });
  const topBar = TopBar();

  const { title, meta } = getContext();

  container.style.backgroundColor = '#4973c3';
  container.style.borderRadius = '10px';
  container.style.marginTop = '20px';

  container.appendChild(topBar);

  Helmet({
    title,
    meta
  });

  if (childElement) {
    container.appendChild(childElement);
  }

  return container;
};

export default MainLayout;
