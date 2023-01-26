import { ButtonStyled } from './Button.styled';
import PropTypes from 'prop-types';

export const Button = ({ func, text, type }) => {
  return (
    <ButtonStyled type={type} className="button" onClick={func}>
      <span>{text}</span>
    </ButtonStyled>
  );
};

Button.propTypes = {
  func: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
