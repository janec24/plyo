

function TimerDisplay(props){
    
    return (
        <div className = "timer-display"> 
            <span className="timer"> {(props.timer.m >= 10)? props.timer.m : "0"+ props.timer.m}</span>&nbsp;<span className="timer">:</span>&nbsp;
            <span className = "timer"> {(props.timer.s >= 10)? props.timer.s : "0"+ props.timer.s}</span>&nbsp;&nbsp;
            </div>
    );
}

export default TimerDisplay;