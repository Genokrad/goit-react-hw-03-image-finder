import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ imgArr }) => {
  return imgArr.map(img => {
    return (
      <li className="gallery-item">
        <ImageGalleryItem img={img} />
      </li>
    );
  });

  // if (imgArr !== null) {
  //   return imgArr.map(img => {
  //     return (
  //       <li className="gallery-item">
  //         <ImageGalleryItem img={img}/>
  //       </li>
  //     );
  //   });
  // }
};
