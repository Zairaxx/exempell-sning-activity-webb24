import { useState } from 'react'
import Activity from './components/Activity'
import './App.css'

function App() {

  const [activity,setActivity] = useState(null)
  const [participants,setParticipants] = useState("1")
  const [type, setType] = useState("education");
  const [isFree, setIsFree] = useState(false);

  let getActivity = async () => {
    let response = await fetch(`https://bored.api.lewagon.com/api/activity?type=${type}&participants=${participants}${isFree ? "&price=0.0" : ""}`);
    let json = await response.json();
    setActivity(json);
  }

  let activityTypes = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

  return (
    <>
      <h1>Activity application</h1>
      <label htmlFor="participants">Participants</label>
      <select name="" id="participants" onChange={e => setParticipants(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <br/>
      <label htmlFor="type">Type: </label>
      <select name="" id="type" onChange={e => setType(e.target.value)}>
        {activityTypes.map(type => <option>{type}</option> )}
      </select>
      <br/>
      <label htmlFor="free">Free activity</label>
      <input type="checkbox" id="free" onChange={e => setIsFree(e.target.checked)}/>
      <br/>
      <button onClick={getActivity}>Get activity</button>
      {activity && <Activity {...activity} />}
    </>
  )
}

export default App
