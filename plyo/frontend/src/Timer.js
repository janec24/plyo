import TimerDisplay from './TimerDisplay'
import TimerButton from './TimerButton'
import {useState} from 'react';


const Timer = () => {
    const [time, setTime] = useState({ms: 0, s: 0, m:0, h:0});
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    //Status 0 : waiting
    //Status 1: running
    //Status 2: stopped

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    }

    var updatedMs = time.ms
    var updatedS = time.s
    var updatedM = time.m
    var updatedH = time.h
    
    const run = () => {
        if (updatedM === 60){
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60){
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100){
            updatedS++;
            updatedMs = 0;
        }
        updatedMs ++;
        return setTime({ms: updatedMs, s: updatedS, m:updatedM, h:updatedH});
    }   

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    }

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ms: 0, s: 0, m:0, h:0})
    }

    const resume = () => start();


    return (
        <div className = "timer-holder">
            <h1> Timer</h1>         
            <TimerDisplay time={time}></TimerDisplay>
            <TimerButton start={start} status={status} stop={stop} reset={reset} resume={resume}> </TimerButton>
        </div> 
    )
}

export default Timer