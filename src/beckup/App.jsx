import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix';
import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGalley/ImageGallery';
import { Button } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from '../Cervices/FetchApi';

import './App.css';

export class App extends Component {
  state = {
    img: [],
    query: '',
    page: 1,
    imgStorage: null,
    isListShown: false,
    isLoading: false,
  };

  handleChangeInput = event => {
    const { value } = event.target;
    this.setState({
      query: value.toLowerCase().trim(),
    });
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    // const { isListShown } = this.state;

    if (query !== prevState.query || page !== prevState.page) {
      this.getImg();
    }
    // if (isListShown && prevState.isListShown !== isListShown) {
    //   this.getImg();
    // }
  }

  getImg = () => {
    this.setState({
      loading: true,
    });
    fetchImages(query, 1)
      .then(images =>
        this.setState({
          imgStorage: images.hits,
          // totalHits: images.totalHits,
        })
      )
      .catch(error => console.log('Something went wrong'))
      .finally(() => this.setState({ loading: false }));
    this.setState({
      query: '',
    });
  };

  createEllement = data => {
    console.log(data);
  };

  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();
    this.setState({ isListShown: false });
    console.log();
  };

  render() {
    const { query, imgStorage, img } = this.state;

    return (
      <>
        <Searchbar />
        {/* <header className="searchbar">
          <form className="form" onClick={this.handleSubmit}>
            <Button text={'Search'} />

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChangeInput}
              value={query}
            />
          </form>
        </header> */}
        <main>
          <ul className="gallery">
            {imgStorage && (
              <ImageGalleryItem
                imgStorage={imgStorage}
                func={this.createEllement}
              />
            )}
          </ul>
        </main>

        {/* <ImageGallery /> */}
      </>
    );
  }
}
