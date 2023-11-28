import React from 'react';
import PropTypes from 'prop-types';

import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  tags,
  onClickImage,
}) => (
  <li className={css.ImageGalleryItem}>
    <img
      onClick={() => onClickImage(largeImageURL)}
      className={css.ImageGalleryItemImg}
      src={webformatURL}
      alt={tags}
      data-largeimage={largeImageURL}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  onClickImage: PropTypes.func,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
