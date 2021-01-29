const Exercises = ({Exercises}) => {

    return(
        <div>
            <h1> Exercises </h1>
        { Exercises.length>0?
        Exercises.map((Exercise) => (
           
                <div className = "exercise-details" key={Exercise.id}>
                    <h2> <img src={Exercise.photo} alt=""/> {Exercise.name} </h2>
                </div>
            
        )
        ) : <h1>Congratulations, you are done! Click 'let's go' again for another workout :) </h1>}
        </div>
    );
}
export default Exercises;