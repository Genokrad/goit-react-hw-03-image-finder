export const Button = ({ func, text, type }) => {
  return (
    <button type={type} className="button" onClick={func}>
      <span className="button-label">{text}</span>
    </button>
  );
};
