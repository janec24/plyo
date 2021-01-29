import TimerDisplay from './TimerDisplay'
import TimerButton from './TimerButton'
import {useState} from 'react';
import {useEffect} from 'react';
import useSound from 'use-sound';
import beep from './beep.wav'
import arms from './arms.png'
import legs from './legs.png'
import cardio from './cardio.png'
import abs from './abs.png'

const Progress = ({newTime, id, current, handleDelete, sets, setCounter, currNum, increaseSets, allCurrentExercises}) => {
    const [timer, setTimer] = useState({ms: 0, s: newTime, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    const [totalSets, setTotalSets] = useState(0);
    const [numDone, setNumDone] = useState(1);
    const [progressPercent, setProgressPercent] = useState(0)
    //Status 0 : waiting
    //Status 1: running
    //Status 2: stopped

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    }

    var updatedMs = timer.ms
    var updatedS = timer.s
    var updatedM = timer.m
    var updatedH = timer.h
    
    const updatedPercent = () => {
        let numerator = (numDone -1) + numDone* (setCounter-1)
        let denominator = totalSets * currNum
        let percent = numerator/denominator * 100 + "%"
        console.log(numerator, denominator, percent)
        setProgressPercent(percent)
    }

    //Checks if timer has reached 0 -> if so, resets timer and deletes most recent exercise
    useEffect(() => {
        if (updatedMs === 0 && updatedS === 0 && updatedM === 0 & updatedH === 0){
            play()
            reset();
            handleDelete(id, numDone, allCurrentExercises)
            setNumDone(numDone+1)
            if (numDone === currNum){
                increaseSets()
                setNumDone(1)
            }
            updatedPercent();
        }
    }
    )

    useEffect(() => {
        setTimer({ms: 0, s: newTime, m:0, h:0})
    }, [newTime] )

    useEffect(()=> {
        setTotalSets(sets)
    }, [sets])


    //for continuously running timer: 
    
    const [play] = useSound(beep);

    //Decrements every ms
    const run = () => {
        if (updatedM === 0){
            if (updatedH >0){
                updatedH--;
                updatedM = 59;
            }
        }
        if (updatedS === 0){
            if (updatedM > 0){
                updatedM --;
                updatedS = 59;
            }
        }
        if (updatedMs === 0){
            if (updatedS > 0){
                updatedS--;
                updatedMs = 99;
            }
        }
        updatedMs --;
        //console.log("timeron")
        return setTimer({ms: updatedMs, s: updatedS, m:updatedM, h:updatedH})
    }   

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
        console.log("Timer Stopped")
    }


    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTimer({ms: 0, s: newTime, m:0, h:0})
        console.log(timer, interv, status);
    }

    const resume = () => start();

    const currentIcon = (focus) => {
        if (focus === 1){
            return abs
        }
        else if (focus === 2) {
            return legs
        }
        else if (focus === 3){
            return cardio
        }
        else {
            return abs
        }
    }

    return (
        <div> {current == null? console.log("no more exercises") : <div className = "timer-holder">
            <div className="progress-details"> 
                <h2 className="exercise-counter"> Exercise: {numDone} / {currNum} </h2> 
                <div> <div className="progress-bar" style={{left:{progressPercent}}}><div className="progress-after"> </div></div></div>
                <h2 className="set-counter"> Set: {setCounter} / {totalSets} </h2>
            </div>
            <img className="icon" src={current.icon? current.icon : currentIcon(current.focus)}></img>
            <h1 className ="exercise-title"> {current.name}</h1>
            
            <TimerDisplay timer={timer}></TimerDisplay>
            <TimerButton start={start} status={status} stop={stop} reset={reset} resume={resume}> </TimerButton>
        </div> }
        </div>
    )
}

export default Progress