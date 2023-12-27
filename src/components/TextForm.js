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
    const copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Text Copyed", "success");
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
        <button className="btn btn-primary me-3 mb-3" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-success me-3 mb-3" onClick={handleLwClick}>
          Convert to lowercase
        </button>
        <button className="btn btn-dark me-3 mb-3" onClick={handleCopy}>
          Copy Text
        </button>
        <button
          className="btn btn-secondary me-3 mb-3"
          onClick={handleRmvSpace}
        >
          Remove Extra Spaces
        </button>
        <button className="btn btn-warning me-3 mb-3" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <h1 className="my-3">Privew</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
