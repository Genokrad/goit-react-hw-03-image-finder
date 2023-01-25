// import { Component } from 'react';
// import { Button } from 'components/Button/Button';

// export class Searchbar extends Component {
//   state = {
//     query: '',
//     currentImage: null,
//     isListShown: false,

//   };

//   search = () => {};

//   handleChange = event => {
//     const { value } = event.target;
//     this.setState({
//       query: value.toLowerCase(),
//     });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.setState({
//       query: '',
//     });
//   };

//   render() {
//     const { query } = this.state;
//     console.log(this.state.imgStorage);
//     return (
//       <header className="searchbar">
//         <form className="form">
//           <Button onClick={this.handleSubmit} text={'Search'} />

//           <input
//             className="input"
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             value={query}
//           />
//         </form>
//       </header>
//     );
//   }
// }
