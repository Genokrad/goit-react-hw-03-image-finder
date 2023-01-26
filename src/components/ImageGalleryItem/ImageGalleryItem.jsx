import { LiStyled, ImgStyled } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ img, imgCacher }) => {
  return (
    <LiStyled className="gallery-item">
      <ImgStyled
        src={img.webformatURL}
        alt={img.tags}
        onClick={() => imgCacher(img.largeImageURL)}
      />
    </LiStyled>
  );
};

ImageGalleryItem.propTypes = {
  imgCacher: PropTypes.func.isRequired,
  img: PropTypes.PropTypes.shape({}).isRequired,
};
