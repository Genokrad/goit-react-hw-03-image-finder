import { Component } from 'react';
import { Button } from 'components/Button/Button';

export class Searchbar extends Component {
  state = {
    query: '',
    value: '',
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      query: value.toLowerCase(),
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.takeQuery(this.state.query);

    this.setState({
      query: '',
    });
  };

  render() {
    const { query } = this.state;

    return (
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <Button text={'Search'} type={'submit'} />

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={query}
          />
        </form>
      </header>
    );
  }
}
