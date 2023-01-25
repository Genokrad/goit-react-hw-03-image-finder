// import { Component } from 'react';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
// import { fetchImages } from '../../Cervices/FetchApi';

// export class ImageGallery extends Component {
//   state = {
//     loading: false,
//     imgStorage: null,
//     totalHits: null,
//   };

//   renderItem = () => {
//     this.setState({
//       loading: true,
//     });
//     fetchImages('milk', 1)
//       .then(images =>
//         this.setState({
//           imgStorage: images.hits,
//           totalHits: images.totalHits,
//         })
//       )
//       .catch(error => console.log('Something went wrong'))
//       .finally(() => this.setState({ loading: false }));
//   };

//   render() {
//     const { imgStorage } = this.state;
//     return (
//       <ul className="gallery">
//         <ImageGalleryItem imgStorage={imgStorage} />
//       </ul>
//     );
//   }
// }
