import Router from 'src/components/Router';
import routes from 'src/routes';

const App = () => {
  const element = document.createElement('div');

  element.className = 'App';

  Router({ app: element, routes });

  return element;
};

export default App;
