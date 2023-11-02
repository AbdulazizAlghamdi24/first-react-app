import React from "react";
import '../App.css'

function Main (){
  return (
    <div className="Main--div">
      <label htmlFor="tinyUrl">Put Your URL Here: </label>
      <input className="tinyUrl" type="text"></input>

    </div>
  )
}

export default Main;