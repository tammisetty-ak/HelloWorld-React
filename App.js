import React from "react";
import "./style.css"
import Button from "./Button"

const Fun=()=>{
    return (
        <div>
            <h1 style={{textAlign:"Center"}}>HelloWorld</h1>
            <h2><i>This is my First React Program</i></h2>
            <p><i>React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications</i></p>
            <p><i>React. js is Built using HTML,CSS, JavaScript</i></p>
            <p><i>Click here for more info</i></p>
            <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.w3schools.com/html/';
      }} buttonname="HTML" />
            <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.w3schools.com/css/';
      }}buttonname="CSS" />
            <Button onClick={(e) => {
      e.preventDefault();
      window.location.href='https://www.w3schools.com/js/';
      }}buttonname="JAVASCRIPT" />
        </div>
    )
}

export default Fun