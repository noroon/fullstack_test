export default function InputField({
  type,
  name,
  id,
  value = '',
  placeholder,
  onChange,
  autoComplete = 'on',
  index = 0,
}) {
  return (
    <input
      type={type}
      className="form-control"
      id={id}
      index={index}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete={autoComplete}
    />
  );
}
