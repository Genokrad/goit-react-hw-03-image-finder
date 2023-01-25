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
  };

  takeQuery = query => {
    this.setState({ query: query });
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.getImg();
    }
  }

  changePage = () => {
    this.setState(prevPage => {
      return {
        page: prevPage.page + 1,
      };
    });
    console.log(this.state.page);
  };

  getImg = () => {
    const { query } = this.state;
    this.setState({
      loading: true,
    });
    fetchImages(query, 1)
      .then(images =>
        this.setState({
          imgArr: images.hits,
        })
      )
      .catch(error => console.log('Something went wrong'))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { imgArr } = this.state;
    console.log(this.state.imgArr);
    return (
      <>
        <Searchbar takeQuery={this.takeQuery} />
        <ImageGallery imgArr={imgArr} func={this.changePage} />
      </>
    );
  }
}
