import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [slide,setSlide] = useState(props.slides[0]);
  const [index,setIndex] = useState(0);
  const nextHandle = () =>{
    if(index<props.slides.length-1){
        setIndex(index+1);
        setSlide(props.slides[index]);
    }
  }
  const prevHandle = () =>{
    if(index>0){
        setIndex(index-1);
        setSlide(props.slides[index]);
    }
  }
  const restartHandle = () =>{
    if(index!=0){
        setIndex(0);
        setSlide(props.slides[index]);
    }
  }
  return (
    <div>
        <div>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
        </div>
        <div>
          <button id="restart" data-testid="button-restart" onClick={restartHandle}>Restart</button>
          <button id="prev" data-testid="button-prev" onClick={prevHandle}>Prev</button>
          <button id="next" data-testid="button-next" onClick={nextHandle}>Next</button>
        </div>
    </div>
  )
}


export default App;
