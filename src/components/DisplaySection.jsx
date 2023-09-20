import "../styles/DisplaySection.css";

function DisplaySection({ heading, children }) {
  return (
    <section>
      <h2>{heading}</h2>
      {children}
    </section>
  );
}

export { DisplaySection };
