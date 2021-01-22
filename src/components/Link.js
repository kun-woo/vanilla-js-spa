const Link = ({ path }) => {
  const popstateEvent = new Event('popstate');
  popstateEvent.state = { prev: window.location.pathname };
  window.history.pushState(popstateEvent.state, path.slice(1), path);
  window.dispatchEvent(popstateEvent);
};

export default Link;
