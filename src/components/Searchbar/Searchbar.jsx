import { Component } from 'react';
import { Button } from 'components/Button/Button';
import { Form, Header, Input } from './Searchbar.styled';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
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
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button text={'Search'} type={'submit'} />

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={query}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  takeQuery: PropTypes.func,
};
