import React, { useState } from "react";
import "./StartModal.css";

const StartModal = (props) => {
  const ClickHandlingFunction = () => {
    props.onClick(true);
    props.userName(name);
  };

  const [name, enteredName] = useState("");

  const nameEnteredHandler = (event) => {
    enteredName(event.target.value);
  };

  const message = (
    <p>
      Choice Predicting App predicts a person's interest in specific art style
      based on time spent viewing a particular art. This app has 21 images of 4
      different categories of art styles distributed randomly. <br />
      <br/>
      Just go through all the art styles and click the button below to view the
      results.
    </p>
  );

  return (
    <div>
      <div className="backdrop"/>
      <div className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <div>{message}</div>
          <div>
            <label>Please Enter Your Name here:</label>
          </div>
          <div>
            <input
              onChange={nameEnteredHandler}
              value={name}
              className="modal_name_input"
              type="text"
            />
          </div>
        </div>
        <footer className="actions">
          <button className="button_startmodal" onClick={ClickHandlingFunction}>
            Okay
          </button>
        </footer>
      </div>
    </div>
  );
};

export default StartModal;
