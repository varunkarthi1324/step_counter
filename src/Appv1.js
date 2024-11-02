import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function Appv1() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setisOpen] = useState(true);

  // const [test,setTest] = useState({ name: "john" });

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }
  function handlenext() {
    if (step < 3) {
      setStep((s) => s + 1);
      //   setTest({ name: "fred" });
    }
  }

  return (
    <>
      <button className="close" onClick={() => setisOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <StepMessage steps={step}>
            {messages[step - 1]}
            <div className="buttons">
              <Button1
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`learn how to ${messages[step - 1]}`)}
              >
                learn how
              </Button1>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button1
              bgColor="#7950f2"
              textColor="#fff"
              onClick={handlePrevious}
            >
              <span>👈</span>Previous
            </Button1>
            <Button1 bgColor="#7950f2" textColor="#fff" onClick={handlenext}>
              Next <span>👉</span>
            </Button1>
          </div>
        </div>
      )}
    </>
  );
}

function StepMessage({ steps, children }) {
  return (
    <div className="message">
      <h3>Step {steps}:</h3>
      {children}
    </div>
  );
}
function Button1({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
