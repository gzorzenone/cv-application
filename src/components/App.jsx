import { useState } from "react";
import { ApplicationForm } from "./ApplicationForm";
import { ApplicationDisplay } from "./ApplicationDisplay";

function App() {
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [phoneNumberInput, setPhoneNumberInput] = useState("");

  return (
    <main>
      <ApplicationForm
        nameInput={nameInput}
        emailInput={emailInput}
        phoneNumberInput={phoneNumberInput}
        onNameInputChange={setNameInput}
        onEmailInputChange={setEmailInput}
        onPhoneNumberInputChange={setPhoneNumberInput} />
      <ApplicationDisplay
        nameInput={nameInput}
        emailInput={emailInput}
        phoneNumberInput={phoneNumberInput} />
    </main>
  );
}

export { App };
