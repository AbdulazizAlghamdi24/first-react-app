import React from "react";
import '../App.css'

function Main(props) {
  
  const handleInputChange = (event) => {
    props.setUrl(event.target.value);
  };

  return (
    <div className="Main--div">
      <label htmlFor="tinyUrl">Put Your URL Here: </label>
      <input
        className="tinyUrl"
        type="text"
        value={props.url}
        onChange={handleInputChange}
      />
      <button onClick={props.onSubmit}>Submit</button>
    </div>
  );
}

export default Main;