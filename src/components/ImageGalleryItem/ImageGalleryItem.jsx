export const ImageGalleryItem = ({ imgStorage }) => {
  // console.log(imgStorage);
  if (imgStorage !== null) {
    return imgStorage.map(img => {
      // console.log(img);
      return (
        <li className="gallery-item">
          <img src={img.largeImageURL} alt="" />
          <p>Item</p>
        </li>
      );
    });
  }
};
