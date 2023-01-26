import { BackDropStyled, ModalStyled, BigImgStyled } from './Modal.styled';
import { Button } from 'components/Button/Button';
import { Component } from 'react';
import { PropTypes } from 'react';

export class Modal extends Component {
  closeModal = e => {
    if (e.code === 'Escape' || e.target.nodeName !== 'IMG') {
      this.props.modalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
    window.addEventListener('click', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
    window.removeEventListener('click', this.closeModal);
  }

  render() {
    return (
      <>
        <BackDropStyled>
          <ModalStyled>
            <BigImgStyled src={this.props.targetImg} alt="" />
          </ModalStyled>
          <Button text={'close'} type={'button'} />
        </BackDropStyled>
      </>
    );
  }
}

// Modal.prototype = {
//   modalClose: PropTypes.func,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.string.isRequired,
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ),
// };
