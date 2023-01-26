import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { UlStyled } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({
  func,
  imgArr,
  fetchArrLenght,
  loading,
  showModal,
  imgCacher,
  targetImg,
  modalClose,
}) => {
  return (
    <>
      {loading && <Loader />}
      <UlStyled>
        {imgArr.map(img => {
          return (
            <ImageGalleryItem key={img.id} img={img} imgCacher={imgCacher} />
          );
        })}
        {imgArr.length > 0 && fetchArrLenght === 12 && (
          <Button text={'Load more'} func={func} type={'button'} />
        )}
      </UlStyled>
      {showModal && <Modal targetImg={targetImg} modalClose={modalClose} />}
    </>
  );
};

ImageGallery.prototype = {
  func: PropTypes.func.isRequired,
  imgArr: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchArrLenght: PropTypes.number.isRequired,
  loading: PropTypes.any.isRequired,
  showModal: PropTypes.any.isRequired,
  imgCacher: PropTypes.func.isRequired,
  targetImg: PropTypes.any.isRequired,
  modalClose: PropTypes.func.isRequired,
};
