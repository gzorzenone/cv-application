import "../styles/Input.css";

function Input({ id, label, type, inputValue, onInputValueChange }) {
  return (
    <label htmlFor={id}>
      {label}
      <input
        type={type}
        id={id}
        name={id}
        value={inputValue}
        onChange={(e) => onInputValueChange(e.target.value)} />
    </label>
  );
}

export { Input };
