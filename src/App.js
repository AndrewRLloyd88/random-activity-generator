import React, { useState } from 'react';
import './App.css';
import ScheduleIcon from '@material-ui/icons/Schedule';

function App() {
  const [activity, setActivity] = useState(null);
  const apiURL = 'https://www.boredapi.com/api/activity';
  const [butText, setButText] = useState("Fetch a random activity")
  const d = new Date().getFullYear(); 
  

  function fetchActivity() {
    fetch(apiURL)
      .then(resp => resp.json())
      .then(data => {
        console.log(data.activity)
       setActivity(data.activity)
       setButText("Fetch a different activity");
      })
  }

  return (
  <div>
    <div className="rose">
      <h2><ScheduleIcon /> Random Activity Generator</h2>
    </div>
    <div className="flex-row">
      <h2>Press the button to generate a random activity to do to cure the bordeom!</h2>
    </div>
    <div className="flex-row">
      <button className="fetch-button" onClick={fetchActivity}>{butText}</button>
    </div>
    

    
   
      <div className="activities flex-row">
    <h1>{activity}</h1>   
    </div>

    <footer>
    
      <p>Copyright © Andrew Lloyd {d}</p>
    </footer>
    </div>
  )

}

export default App;
