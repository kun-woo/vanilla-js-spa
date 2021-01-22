export const rgb = (r, g, b) => {
  return `rgb(${[(r || 0), (g || 0), (b || 0)].join(',')})`;
};

const colorUtil = {
  rgb
};

export default colorUtil;
