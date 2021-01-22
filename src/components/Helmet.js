const Helmet = ({
  title, meta = {}
} = {}) => {
  if (title && document.title !== title) {
    document.title = title;
  }

  Object.keys(meta).forEach((key) => {
    const metaTag = document.querySelector(`meta[name="${key}"]`);
    if (metaTag) {
      metaTag.setAttribute('content', meta[key]);
    }
  });
};

export default Helmet;
