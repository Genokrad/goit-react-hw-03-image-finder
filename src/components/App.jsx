import { Component } from 'react';
// import { Notify } from 'notiflix';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../Cervices/FetchApi';
// import { Paragraph } from './Paragraph/Paragraph';

import './App.css';

export class App extends Component {
  state = {
    loading: false,
    page: 1,
    query: '',
    imgArr: [],
    fetchArrLenght: 0,
    showModal: false,
    targetImg: null,
  };

  modalClose = () => {
    this.setState({ showModal: false });
  };

  takeQuery = query => {
    this.setState({ query: query, page: 1, imgArr: [] });
  };

  loadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.getImg();
    }
  }

  getImg = () => {
    const { query, page } = this.state;
    this.setState({
      loading: true,
    });
    fetchImages(query, page)
      .then(images => this.updateArrs(images))
      .catch(error => console.log('Something went wrong'))
      .finally(() => this.setState({ loading: false }));
  };

  updateArrs = images => {
    this.setState(prevState => {
      return { imgArr: [...prevState.imgArr, ...images.hits] };
    });
    this.setState({ fetchArrLenght: images.hits.length });
  };

  imgCacher = image => {
    this.setState({ targetImg: image, showModal: true });
  };

  render() {
    const { imgArr, fetchArrLenght, loading, showModal, targetImg } =
      this.state;
    // console.log(this.state.fetchArrLenght);
    return (
      <>
        <Searchbar takeQuery={this.takeQuery} />
        <ImageGallery
          imgArr={imgArr}
          fetchArrLenght={fetchArrLenght}
          func={this.loadMore}
          loading={loading}
          showModal={showModal}
          imgCacher={this.imgCacher}
          targetImg={targetImg}
          modalClose={this.modalClose}
        />
        {/* {imgArr.length < 1 && <Paragraph />} */}
      </>
    );
  }
}
