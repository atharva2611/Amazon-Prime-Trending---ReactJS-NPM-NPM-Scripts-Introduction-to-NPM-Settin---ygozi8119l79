import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [index,setIndex] = useState(0);

  const nextHandle = () =>{
    if(index<props.slides.length){
        setIndex(index+1);
        document.getElementById("prev").disabled=false;
        document.getElementById("restart").disabled=false;
    }
    console.log("index = "+index);
    if(index==Object.entries(props.slides).length-1){
      document.getElementById("next").disabled=true;
    }
    console.log("index = "+index);
  }
  const prevHandle = () =>{
    console.log("prev => index = "+index);
    if(index>0){
        setIndex(index-1);
        document.getElementById("next").disabled=false;
    }
    if(index===0){
      document.getElementById("prev").disabled=true;
      document.getElementById("restart").disabled=true;
    }
    console.log("index = "+index);
  }
  const restartHandle = () =>{
    console.log("restart => index = "+index);
    if(index!==0){
        setIndex(0);
        document.getElementById("restart").disabled=true;
    }
    console.log("index = "+index);
  }
  return (
    <div>
        <div>
            <h1 data-testid="title">{props.slides[index].title}</h1>
            <p data-testid="text">{props.slides[index].text}</p>
        </div>
        <div>
          <button id="restart" data-testid="button-restart" onClick={restartHandle} disabled>Restart</button>
          <button id="prev" data-testid="button-prev" onClick={prevHandle} disabled>Prev</button>
          <button id="next" data-testid="button-next" onClick={nextHandle}>Next</button>
        </div>
    </div>
  )
}


export default App;
