import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Button } from 'components/Button/Button';
// import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from '../Cervices/FetchApi';

import './App.css';

export class App extends Component {
  state = {
    loading: false,
    page: 1,
    query: '',
    imgArr: [],
    fetchArrLenght: 0,
    showModal: false,
  };

  takeQuery = query => {
    this.setState({ query: query });
    this.setState({ page: 1 });
    this.setState({ imgArr: [] });
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

  render() {
    const { imgArr, fetchArrLenght, loading, showModal } = this.state;
    console.log(this.state.fetchArrLenght);
    return (
      <>
        <Searchbar takeQuery={this.takeQuery} />
        <ImageGallery
          imgArr={imgArr}
          fetchArrLenght={fetchArrLenght}
          func={this.loadMore}
          loading={loading}
          showModal={showModal}
        />
      </>
    );
  }
}
