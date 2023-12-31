import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  let [text, setText] = useState("");

  const handleONChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLwClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copyed to Clipboard", "success");
  };

  const handleRmvSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Text Removed", "success");
  };

  const handleClear = () => {
    setText("");
    props.showAlert("Text Cleared", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Enter text here to analyze</h1>
        <div className="mb-3 mt-3">
          <textarea
            rows="8"
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleONChange}
            placeholder="Enter your text!"
            style={{
              backgroundColor: props.mode === "dark" ? "#486581" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary me-3 mb-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-success me-3 mb-3" onClick={handleLwClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-dark me-3 mb-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0}
          className="btn btn-secondary me-3 mb-3"
          onClick={handleRmvSpace}
        >
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} className="btn btn-warning me-3 mb-3" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(/\s+/).filter((eliment) => {return eliment.length!==0}).length} words and {text.length} characters
        </p>
        <h2 className="my-3">Privew</h2>
        <p>{text.length>0? text:'Noting to privew!'}</p>
      </div>
    </>
  );
}
