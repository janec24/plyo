
function TimerButton(props){
    return (
        <div>
            
            {(props.status === 0)? 
            <button onClick={props.start} className ="stopwatch-btn stopwatch-btn-gre"> START</button> : ""
            }
           
            {(props.status === 1)? 
            <div>
            <button onClick={props.stop} className ="stopwatch-btn stopwatch-btn-yel"> STOP</button> 
            <button onClick={props.reset} className ="stopwatch-btn stopwatch-btn-red"> RESET</button> </div>: ""
            }

            {(props.status === 2)? 
            <div>
            <button onClick={props.resume} className ="stopwatch-btn stopwatch-btn-gre"> RESUME</button> 
            <button onClick={props.reset} className ="stopwatch-btn stopwatch-btn-red"> RESET</button> </div>: ""
            }

        </div>
    );
}

export default TimerButton;