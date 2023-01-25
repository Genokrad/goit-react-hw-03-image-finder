export const ImageGalleryItem = ({ func, imgStorage }) => {
  // console.log(imgStorage);
  if (imgStorage !== null) {
    return imgStorage.map(img => {
      func(imgStorage)
      return (
        <li className="gallery-item">
          <img src={img.largeImageURL} alt="" />
          <p>Item</p>
        </li>
      );
    });
  }
};
