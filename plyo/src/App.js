import Navbar from './Navbar';
import Form from './Form';
import ExerciseDisplay from './ExerciseDisplay'
import {useState} from 'react'


function App() {
  //we set all the states here so we can pass the change methods into form and then pass props to exercisedisplay
  const [num, setNum] = useState(5)
  const [focus, setFocus] = useState("fullBody")
  const [level, setLevel] = useState(2)
  const [time, setTime] = useState(45)
  const [sets, setSets] = useState(3)
  const [challengeMode, setChallengeMode] = useState(false)

  //called by button in form, set's time based on slider value
  const handleNum = (num) => {
    setNum(num)
    console.log("num exercises changed to " + num)
  } 

  const handleTime = (time) => {
    setTime(time)
    console.log("time changed to " + time)
  }

  //called by form, sets level when level button is clicked
  const handleLevel = (level)=> {
    setLevel(level)
    console.log("level set to " + level)
  }

  //called by form, sets focus when level button is clicked
  const handleFocus = (focus)=> {
    setFocus(focus)
    console.log("focus set to " + focus)
  }

  const handleSets = (sets) => {
    setSets(sets)
    console.log("number of sets changed to " + sets)
  }

  const challengeModeOn = () =>{
    setChallengeMode(true)
    console.log("challenge mode: " + challengeMode)
  }

  const challengeModeOff = () =>{
    setChallengeMode(false)
    console.log("challenge mode: " + challengeMode)
  }

  return (
    <div className="App">
      <div className="Component">
        <Navbar></Navbar>
        <Form handleNum={handleNum} handleTime={handleTime} handleFocus={handleFocus} handleLevel={handleLevel} handleSets={handleSets} challengeModeOn={challengeModeOn}/>
        <ExerciseDisplay num={num} focus={focus} level={level} time={time} sets={sets} challengeMode={challengeMode} challengeModeOff={challengeModeOff}></ExerciseDisplay>
        <div className="blob"></div>
        <div className="blob2"></div>
      </div>
    </div>
  );
}

export default App;
