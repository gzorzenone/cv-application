import "../styles/ApplicationForm.css";
import { FormSection } from "./FormSection";
import { Input } from "./Input";

function ApplicationForm({
  nameInput,
  emailInput,
  phoneNumberInput,
  onNameInputChange,
  onEmailInputChange,
  onPhoneNumberInputChange
}) {
  return (
    <section className="formSection">
      <form>
        <FormSection legend="General Information">
          <Input id="name" label="Name:" type="text" inputValue={nameInput} onInputValueChange={onNameInputChange} />
          <Input id="email" label="Email:" type="email" inputValue={emailInput} onInputValueChange={onEmailInputChange} />
          <Input id="phoneNumber" label="Phone number:" type="tel" inputValue={phoneNumberInput} onInputValueChange={onPhoneNumberInputChange} />
        </FormSection>
      </form>
    </section>
  );
}

export { ApplicationForm };
