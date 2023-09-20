import "../styles/ApplicationDisplay.css";
import { DisplaySection } from "./DisplaySection";

function ApplicationDisplay({ nameInput, emailInput, phoneNumberInput }) {
  return (
    <section className="displaySection">
      <DisplaySection heading="General Information">
        <p>Name: {nameInput}</p>
        <p>Email: {emailInput}</p>
        <p>Phone number: {phoneNumberInput}</p>
      </DisplaySection>
    </section>
  );
}

export { ApplicationDisplay };
