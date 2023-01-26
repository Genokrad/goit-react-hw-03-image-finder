import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';
import { Modal } from 'components/Modal/Modal';

export const ImageGallery = ({
  func,
  imgArr,
  fetchArrLenght,
  loading,
  showModal,
}) => {
  return (
    <>
      {loading && <Loader />}
      <ul>
        {imgArr.map(img => {
          return <ImageGalleryItem key={img.id} img={img} />;
        })}
        {imgArr.length > 0 && fetchArrLenght === 12 && (
          <Button text={'Load more'} func={func} type={'button'} />
        )}
      </ul>
      {!showModal && <Modal />}
    </>
  );
};
