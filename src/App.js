import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for a job 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrev() {
    step > 1 ? setStep((s) => s - 1) : setStep(1);
  }

  function handleNext() {
    step < 3 ? setStep((s) => s + 1) : setStep(3);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button className="btn-color" onClick={handlePrev}>
              Previous
            </button>
            <button className="btn-color" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
