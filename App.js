import React, { useState } from 'react';
// import Display from './Display.js';
// import Test from './src/Testing';
import './App.css';

export default function App() {

  //   let [count, setCount]=useState(0)
  //   let [isMorning, setMorning]=useState(false)
  //   return (
  //     <div className={`App ${isMorning? 'darkNight':''}`} >
  // <h3>Day Time: {isMorning? 'Night' : 'Morning'}</h3>
  //         <button onClick={()=>{setMorning(!isMorning)}}>Dark Mode</button>
  //       <br></br>
  //   <h1>Hello Subhan!{isMorning? 'Night' : 'Morning'}  Dude.</h1>

  //    <p> <strong>What are we doing Here? </strong> </p>
  //   <br></br>
  //   <br></br> 
  //  <Display counter={count} />
  //   <button onClick={()=>{
  //      setCount(count+1)
  //   }}>Add Value</button>

  //   <button onClick={()=>{
  //     setCount(count-1)
  //   }}>Subtract Value</button> 
  //   <br></br> 
  let [morning, setMorning] = useState(true);
  return (
    <div>
      <div className={`App ${morning ? 'App' : 'darkNight'}`}>
        {/* <button onClick={()=>{setMorning(!morning)}}>Switch for Dark-Mode</button> */}

        <a href="#" onClick={() => { setMorning(!morning) }} className="button">DARK-MODE!
      </a>

      </div>
    </div>
  );
}


