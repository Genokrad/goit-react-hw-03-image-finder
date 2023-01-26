import { LiStyled, ImgStyled } from './ImageGalleryItem.styled';

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
