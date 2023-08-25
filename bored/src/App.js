import logo from './logo.svg';
import './App.css';
import { getRandomActivity, getActivityByType} from './api';
import { useState } from 'react';

function App() {

const[activity, setActivity] = useState({});
const[activityType, setActivityType] = useState();

function getActivity(){
  getRandomActivity()
    .then((response) => response.json())
    .then((data) => {
      setActivity(data)
      console.log(data)
    })
}

function getType(){
  getActivityByType(activityType)
    .then((response) => response.json())
    .then((data) => {
      setActivity(data)
      console.log(data)
    })
}

function handleType(e){
  setActivityType(e.target.value)
}


  return (
    <div className="App">
      <h1>Are You Bored and Don't Know What To Do?</h1>
      <button onClick={getActivity}>Get Activity</button>
      <h5>Or Select an Activity by Type!</h5>
      <select onChange={handleType} value={activityType}>
        <option value="recreational">Recreational</option>
        <option value="social">Social</option>
        <option value="cooking">Cooking</option>
        <option value="relaxation">Relaxation</option>
        <option value="diy">DIY</option>
      </select> 
      <button onClick={getType}>Get Activity By Type</button>
      <p><strong>Activity: </strong>{activity.activity}</p>
      <p><strong>Type: </strong>{activity.type}</p>
      <p><strong>Participants: </strong>{activity.participants}</p>
      <p><strong>Price: </strong>{activity.price}</p>
      <p><strong>Accessibility: </strong>{activity.accessibility}</p>
    </div>
  );
}

export default App;
