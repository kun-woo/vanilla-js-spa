import Box from 'src/components/Box';
import ImageButton from 'src/components/ImageButton';
import MainLayout from 'src/layouts/MainLayout';
import { setContext } from 'src/utils/context';
import { appendChildAndReturnParent } from 'src/utils/dom';
import images from 'src/utils/images';

const buttonStyle = {
  borderRadius: '10px',
  backgroundColor: '#ffffff',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '55px',
  height: '55px',
  padding: 0,
};

const onClick = (image, stage) => () => {
  const imageElement = document.createElement('img');

  imageElement.src = image;
  imageElement.style.objectFit = 'contain';
  imageElement.style.width = '100%';
  imageElement.style.height = 'auto';

  if (stage.hasChildNodes()) {
    stage.removeChild(stage.firstChild);
  }

  stage.appendChild(imageElement);
};

const PhotoView = () => {
  const box = Box({
    mb: 20, htmlTag: 'main'
  });
  const list = Box({
    py: 10, display: 'flex', alignItems: 'center', className: 'no-scrollbar', htmlTag: 'ul'
  });
  const stage = Box({
    mt: 10, display: 'flex', justifyContent: 'center', alignItems: 'center'
  });
  const spacing = Box({ p: 2.5, htmlTag: 'li' });

  stage.style.backgroundColor = '#000';
  stage.style.height = '747px';
  stage.style.borderBottomLeftRadius = '10px';
  stage.style.borderBottomRightRadius = '10px';

  images.forEach((image) => {
    const imageButton = ImageButton({
      onClick: onClick(image, stage),
      image,
      style: buttonStyle,
      className: 'imagebutton'
    });
    const itemWrapper = Box({
      mx: 10, htmlTag: 'li'
    });

    itemWrapper.appendChild(imageButton);
    list.appendChild(itemWrapper);
  });

  list.appendChild(spacing);
  box.appendChild(list);
  box.appendChild(stage);

  setContext({
    title: 'Vanilla JS SPA - Photo',
    meta: {
      description: 'Click a thumbnail to view it on the bottom screen.'
    },
    showBackButton: true,
    showNewButton: false
  });

  return appendChildAndReturnParent(MainLayout, box);
};

export default PhotoView;
