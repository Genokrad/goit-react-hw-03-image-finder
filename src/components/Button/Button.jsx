export const Button = ({ text }) => {
  return (
    <button type="submit" className="button">
      <span className="button-label">{text}</span>
    </button>
  );
};
