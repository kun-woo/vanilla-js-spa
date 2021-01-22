const Router = ({
  app, routes = []
} = {}) => {
  const switchElement = (newRoutes) => {
    const { pathname } = window.location;
    const targetPath = pathname === '/'
      ? pathname : pathname.replace(/\/+$/, '');
    const targetElement = targetPath in newRoutes
      ? newRoutes[targetPath] : newRoutes['*'];

    if (app.hasChildNodes()) {
      app.removeChild(app.firstChild);
    }

    app.appendChild(targetElement());
  };

  if (app && routes.length > 0) {
    const newRoutes = routes.reduce((acc, cur) => ({ ...acc, [cur.path]: cur.element }), {});

    switchElement(newRoutes);

    window.onpopstate = (event) => {
      if (!('state' in event)
        || !event.state
        || event.state.prev !== window.location.pathname) {
        switchElement(newRoutes);
      }
    };
  }
};

export default Router;
