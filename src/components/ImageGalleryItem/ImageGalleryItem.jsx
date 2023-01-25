export const ImageGalleryItem = ({ img }) => {
  return (
    <li className="gallery-item">
      <img src={img.largeImageURL} alt={img.tags} />
    </li>
  );
};
