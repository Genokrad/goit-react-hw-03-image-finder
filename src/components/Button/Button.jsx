export const Button = ({ onClick, text }) => {
  return (
    <button type="submit" className="button" onClick={onClick}>
      <span className="button-label">{text}</span>
    </button>
  );
};
