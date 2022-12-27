import React, {useState} from 'react';

export default function TextForm(props) {
const handleUpClick = ()=>{
  // console.log("upper case was clicked");
  let newText = text.toUpperCase();
  setText(newText)
}

const handleOnChange = (event)=> {
  // console.log("On change");
  setText(event.target.value)
}


const [text, setText] = useState('');

  return (
    <>
    <div className='container'>
    <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>

    <div className="container my-3" >
      <h1>your text summary</h1>
      <p>{text.split(" ").length} words, {text.length} characters</p>
      <p> {0.008 * text.split(" ").length}  minutes read</p>

      <h3>Preview</h3>
      <p>{text}</p>
    </div>

      
    </>
  );
}
