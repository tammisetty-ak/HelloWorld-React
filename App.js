import React from "react";
import "./style.css"

const Fun=()=>{
    return (
        <div>
            <h1 style={{textAlign:"Center"}}>HelloWorld</h1>
            <h2><i>This is my First React Program</i></h2>
            <p><i>React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications</i></p>
            <p><i>React. js is Built using HTML,CSS, JavaScript</i></p>
            <p><i>Click here for more info</i></p>
            <button onClick={()=> window.open("https://www.w3schools.com/html/", "_blank")}>HTML</button>
            <button onClick={()=> window.open("https://www.w3schools.com/css/", "_blank")}>CSS</button>
            <button onClick={()=> window.open("https://www.w3schools.com/js/", "_blank")}>JS</button>

        </div>
    )
}

export default Fun
