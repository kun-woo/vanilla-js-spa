let context = {};

export const getContext = () => (context);

export const setContext = (newContext) => { context = { ...context, ...newContext }; };

const contextAPI = {
  context
};

export default contextAPI;
