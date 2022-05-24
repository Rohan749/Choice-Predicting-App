import React from "react";
import "./ResultModal.css";

const ResultModal = (props) => {
  const endClick = () => {
    props.onClick();
  };

  return (
    <div>
      <div className="backdrop" />
      <div className="modal">
        <header className="header">
          <h2>Hey {props.name_of_user}!</h2>
        </header>
        <div className="content">
          <div>
            <label>
              Thankyou For Your Response. <br/>
              Based on time spend hovering on every
              art sample, your current choice is: {props.predictedValue}. <br/>
              <br/>
              Go to console for detailed Result!
            </label>
          </div>
        </div>
        <footer className="actions">
          <button onClick={endClick} className="button_startmodal">
            Thankyou
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ResultModal;
