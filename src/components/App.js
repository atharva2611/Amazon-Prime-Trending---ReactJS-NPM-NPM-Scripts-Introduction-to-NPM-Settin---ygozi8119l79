import React, {Component, useState} from "react";
import '../styles/App.css';
import slides from "../data";
const App = () => {
  return (
    <div>
      {slides.map(slide=>{
        return (
          <div>
            <h1>{slide.text}</h1>
            <p>{slide.title}</p>
          </div>
        );
      })}
    </div>
  )
}


export default App;
