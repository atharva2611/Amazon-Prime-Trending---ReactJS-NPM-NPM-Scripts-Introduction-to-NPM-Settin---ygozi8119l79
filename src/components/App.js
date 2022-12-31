import React, {Component, useState} from "react";
import '../styles/App.css';

const App = (props) => {
  const [slide,setSlide] = useState(props.slides[0]);
  return (
    <div>
        <div>
            <h1>{slide.title}</h1>
            <p>{slide.text}</p>
        </div>
        <div>
          <button id="restart" data-testid="button-restart">Restart</button>
          <button id="prev" data-testid="button-prev">Prev</button>
          <button id="next" data-testid="button-next">Next</button>
        </div>
    </div>
  )
}


export default App;
