import { Component } from 'react';
// import { Notify } from 'notiflix';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from 'components/Button/Button';

import { fetchImages } from '../Cervices/FetchApi';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { Paragraph } from './Paragraph/Paragraph';
import { Button } from './Button/Button';

import './App.css';

export class App extends Component {
  state = {
    loading: false,
    page: 1,
    query: '',
    imgArr: [],
    fetchArrLenght: 0,
    showModal: false,
    showEmpty: false,
    targetImg: null,
  };

  modalClose = () => {
    this.setState({ showModal: false });
  };

  takeQuery = query => {
    this.setState({ query: query, page: 1, imgArr: [], showEmpty: false });
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
    if (!images.hits.length) {
      this.setState({ showEmpty: true });
    }
    this.setState(prevState => {
      return { imgArr: [...prevState.imgArr, ...images.hits] };
    });
    this.setState({ fetchArrLenght: images.hits.length });
  };

  imgCacher = image => {
    this.setState({ targetImg: image, showModal: true });
  };

  render() {
    const { imgArr, fetchArrLenght, loading, showModal, targetImg, showEmpty } =
      this.state;

    return (
      <>
        <Searchbar takeQuery={this.takeQuery} />
        {loading && <Loader />}
        <ImageGallery imgArr={imgArr} imgCacher={this.imgCacher} />
        {imgArr.length > 0 && fetchArrLenght === 12 && (
          <Button text={'Load more'} func={this.loadMore} type={'button'} />
        )}
        {showModal && (
          <Modal targetImg={targetImg} modalClose={this.modalClose} />
        )}
        {showEmpty && <Paragraph />}
      </>
    );
  }
}
