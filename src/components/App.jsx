import { Component } from 'react';
// import { nanoid } from 'nanoid';
// import { Notify } from 'notiflix';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGalley/ImageGallery';
import { Button } from 'components/Button/Button';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { fetchImages } from '../Cervices/FetchApi';

import './App.css';

export class App extends Component {
  state = {
    img: [],
    query: '',
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
    const { isListShown } = this.state;

    if (isListShown && prevState.isListShown !== isListShown) {
      this.getImg();
    }
  }

  // getImg = () => {
  //   this.setState({ isLoading: true });
  //   fetchImages(this.state.query, 1)
  //     .then(data =>
  //       this.setState(prevState => ({
  //         img: [...prevState.img, ...data],
  //       }))
  //     )
  //     .catch(error => console.log(error))
  //     .finally(() => this.setState({ isLoading: false }));
  // };

  createEllement = data => {
    console.log(data);
  };

  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();
    this.setState({ isListShown: false });
    console.log();
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

  render() {
    const { query, imgStorage, img } = this.state;

    return (
      <>
        <header className="searchbar">
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
        </header>
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
        {/* <Searchbar />
        <ImageGallery /> */}
      </>
    );
  }
}
