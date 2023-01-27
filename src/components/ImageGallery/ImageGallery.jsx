import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { UlStyled } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ imgArr, imgCacher }) => {
  return (
    <>
      <UlStyled>
        {imgArr.map(img => {
          return (
            <ImageGalleryItem key={img.id} img={img} imgCacher={imgCacher} />
          );
        })}
      </UlStyled>
    </>
  );
};

ImageGallery.propTypes = {
  imgArr: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  imgCacher: PropTypes.func.isRequired,
};
