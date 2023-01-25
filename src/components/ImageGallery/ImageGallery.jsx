import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Button } from 'beckup/Button/Button';

export const ImageGallery = ({ func, imgArr }) => {
  return (
    <ul>
      {imgArr.map(img => {
        return <ImageGalleryItem key={img.id} img={img} />;
      })}
      <Button text={'Load more'} func={func} type={'button'} />
    </ul>
  );
};
