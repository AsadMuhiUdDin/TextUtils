import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    setText('');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea 
            className="form-control" 
            id="myBox" 
            rows="8" 
            value={text} 
            onChange={handleOnChange}  
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.textColor }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter(Boolean).length} Minutes read</p>
        <h2>Preview</h2>
        <p style={{ color: props.textColor }}>{text}</p>
      </div>
    </>
  );
}
