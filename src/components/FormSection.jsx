import "../styles/FormSection.css";

function FormSection({ legend, children }) {
  return (
    <fieldset>
      <legend>{legend}</legend>
      {children}
    </fieldset>
  );
}

export { FormSection };
