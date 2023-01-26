import { ButtonStyled } from './Button.styled';

export const Button = ({ func, text, type }) => {
  return (
    <ButtonStyled type={type} className="button" onClick={func}>
      <span>{text}</span>
    </ButtonStyled>
  );
};
