import {useState} from 'react';
import Exercises from './Exercises';
import Progress from './Progress';
import {useEffect} from 'react'
import React from 'react'

const ExerciseDisplay = ({num, focus, level, time, sets, challengeMode, challengeModeOff}) => {
    const myRef = React.createRef()
    const [exercises, setExercises] = useState(null)
    const [exerciseBank, setExerciseBank] = useState(null)
    //create newTime variable here that changes when we submit form
    const [newTime, setNewTime] = useState(null)
    const [newSets, setNewSets] = useState(null)
    const [setCounter, setSetCounter] = useState(1)
    const [currNum, setCurrNum] = useState(5)
    var newExercises = []
    const [allCurrentExercises, setAllCurrentExercises] = useState(null)
     //onload, exercises are not displayed
    const [showResults, setShowResults] = useState(false)
    
   //fetch data from backend on load
   useEffect(()=> {
       fetch('http://127.0.0.1:8000/api/workout/')
        .then(res => {
           return res.json();
        })
        .then(data => {
            console.log(data)
            setExerciseBank(data)
        })
   }, []);

   useEffect(() => {
       if (challengeMode){
           changeDisplay(4, 4, 'fullBody', 60, 5)
       }
   }, [challengeMode])

    //once submit button is changed, exercises are loaded up based on given values
    const changeDisplay = (num, level, focus, time, sets) => {
        setNewTime(time);
        setNewSets(sets);
        setCurrNum(num);
        setSetCounter(1);
        challengeModeOff();

        console.log("Changing exercise list to: " + num + level + focus + newTime + "s")
        //first button click reveals this group of components 
        setShowResults(true)
        
        //scroll to exercises when button is clicked
        window.scrollTo(0, myRef.current.offsetTop);

        var focusID = null
        /*if (focus === 'upper'){
            focusID = 1
        }*/
        if (focus === 'legs'){
            focusID = 2
        }
        if (focus === 'cardio'){
            focusID = 3
        }
        if (focus === 'abs'){
            focusID = 4
        }
        
        // filtering based on focus - dont need to filter if full body
        var newExerciseBank = exerciseBank
        if (focus !== 'fullBody'){
            newExerciseBank = exerciseBank.filter(exercise => exercise.focus === focusID)
        }
        if (level === 4) {
            newExerciseBank = newExerciseBank.filter(exercise => exercise.level = 3);
        }
        //don't need to filter level if abs, otherwise we do filter 
        else if (focus!== 'abs'){
            newExerciseBank = newExerciseBank.filter(exercise => exercise.level <= level)
        }

        //add the number of requested exercises (num) to new array
        let added = new Map()
        for (let i = 0; i<num; i++){
            let random = Math.floor(Math.random()*newExerciseBank.length)
            if (newExerciseBank.length > num) {
                while (added[random] === 1){
                random =Math.floor(Math.random()*newExerciseBank.length)
                }
            }
            newExercises.push(newExerciseBank[random])
            added[random] = 1
            }
        console.log(newExercises)
        setExercises(newExercises);
        setAllCurrentExercises(newExercises)
    }

    //pass the first exercise as current so that it can be deleted once completed
    if (exercises != null){
        if (exercises.length > 0){
            var id = exercises[0].id;
            var current = exercises[0]
        }
        else{
            var id = null
            var current = null
        }
    }

    const increaseSets = ()=>{
        setSetCounter(setCounter+1);
    }

     //called when the timer reaches 0 -> deletes the first exercise once completed, changes exercise state 
     const handleDelete = (id, numDone, allCurrentExercises) => {
        console.log("count: " + setCounter + "total" + sets)
        if (id != null){
            const exercisesWithoutFirst = exercises.filter(exercise => exercise.id !== id);
            setExercises(exercisesWithoutFirst);
        }
        if (numDone === currNum && setCounter < sets){
            setExercises(allCurrentExercises)
            console.log("TESTING NEW SET RESET: ")
        }
    } 

    return(
        <div className="ExerciseDisplay">
            <button className="submitButton" onClick={()=> changeDisplay(num, level, focus, time, sets)}> Let's Go!</button>
            <div ref={myRef}> {showResults ? <Progress newTime = {newTime} id={id} current={current} handleDelete={handleDelete} sets={newSets} setCounter={setCounter} currNum={currNum} increaseSets = {increaseSets} allCurrentExercises={allCurrentExercises}/> : null} </div>
            <div> {/*showResults ? <h1> Num Exercises: {num} Focus: {focus} Level: {level} Time: {newTime}</h1> : null*/}</div>
            {exercises && <div> {showResults? <Exercises Exercises = {exercises}/> : null} </div>}
        </div>
    );
}
export default ExerciseDisplay;