export default function Button(
  { type, className, value, onClick, id = value },
) {
  return (
    <button
      type={type === 'submit' ? 'submit' : 'button'}
      className={`btn ${className} mx-auto`}
      onClick={onClick}
      id={id}
    >
      {value}
    </button>
  );
}
