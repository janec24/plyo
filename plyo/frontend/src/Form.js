import Slider from '@material-ui/core/Slider'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button'
import { styled } from '@material-ui/core/styles';
import { useState } from 'react';


const myButtonGroup = styled(ButtonGroup)({
    borderColor: 'white',
})

function valuetext(value){
    return '{value} min'
}

const Form = ({handleNum, handleTime, handleLevel, handleFocus, handleSets, challengeModeOn}) => {
    //hooks for formatting changes on button click
    const accentColor = 'rgba(255, 255, 255, 0.4)';
    const [absBackgroundColor, setAbsBackgroundColor] = useState('transparent');
    const [cardioBackgroundColor, setCardioBackgroundColor] = useState('transparent');
    const [legsBackgroundColor, setLegsBackgroundColor] = useState('transparent');
    const [fullBackgroundColor, setFullBackgroundColor] = useState(accentColor);
    const [beginnerBackgroundColor, setBeginnerBackgroundColor] = useState('transparent');
    const [mediumBackgroundColor, setMediumBackgroundColor] = useState(accentColor);
    const [hardBackgroundColor, setHardBackgroundColor] = useState('transparent');
    const [disable, setDisable] = useState(false);


    //custom styling for all buttons in form
    const MyButton = styled(Button)({
        color: 'white',
        borderColor: 'white',
        marginLeft: '10px',
    })

    //runs when focus is changed
    const handleFocusBtn = (focus) => {
        //first, run this to pass to exerciseDisplay
        handleFocus(focus)

        //change background color if clicked
        if (focus === 'abs'){
            setAbsBackgroundColor(accentColor)
            setCardioBackgroundColor('transparent')
            setLegsBackgroundColor('transparent')
            setFullBackgroundColor('transparent')
            //disable if abs selected (no levels for abs)
            setDisable(true);
        }
        else if (focus === 'cardio'){
            setAbsBackgroundColor('transparent')
            setCardioBackgroundColor(accentColor)
            setLegsBackgroundColor('transparent')
            setFullBackgroundColor('transparent')
            setDisable(false);
        }
        else if (focus === 'legs'){
            setAbsBackgroundColor('transparent')
            setCardioBackgroundColor('transparent')
            setLegsBackgroundColor(accentColor)
            setFullBackgroundColor('transparent')
            setDisable(false);
        }
        else if (focus === 'fullBody'){
            setAbsBackgroundColor('transparent')
            setCardioBackgroundColor('transparent')
            setLegsBackgroundColor('transparent')
            setFullBackgroundColor(accentColor)
            setDisable (false);
        }
    }

    const handleLevelBtn = (level) => {
        handleLevel(level)

        if (level === 1){
            setBeginnerBackgroundColor(accentColor)
            setMediumBackgroundColor('transparent')
            setHardBackgroundColor('transparent')
        }
        if (level === 2){
            setBeginnerBackgroundColor('transparent')
            setMediumBackgroundColor(accentColor)
            setHardBackgroundColor('transparent')
        }
        if (level === 3){
            setBeginnerBackgroundColor('transparent')
            setMediumBackgroundColor('transparent')
            setHardBackgroundColor(accentColor)
        }
    }
    

    return (
        <div className = "form">
            <section className="glass">
                <h2>Focus
                    <ButtonGroup aria-label="outlined primary button group" >
                    <MyButton className="abs-btn" onClick={() => handleFocusBtn('abs')} style={{backgroundColor: absBackgroundColor}} > Abs </MyButton>
                    <MyButton className="cardio-btn" onClick={() => handleFocusBtn('cardio')} style={{backgroundColor: cardioBackgroundColor}}>Cardio</MyButton>
                    <MyButton className="legs-btn" onClick={() => handleFocusBtn('legs')} style={{backgroundColor: legsBackgroundColor}}>Legs/Glutes</MyButton>
                    <MyButton className="full-btn" onClick={() => handleFocusBtn('fullBody')} style={{backgroundColor: fullBackgroundColor}}> Full Body</MyButton>
                    </ButtonGroup>
                </h2>

                <h2 style={{marginTop: "38px"}}>Level / Intensity
                    <ButtonGroup aria-label="outlined primary button group" >
                    {/*<MyButton onClick={() => handleLevelBtn(1)} > Low Impact </MyButton>*/}
                    <MyButton onClick={() => handleLevelBtn(1)} style={{backgroundColor: beginnerBackgroundColor}} disabled={disable} > Beginner </MyButton>
                    <MyButton onClick={() => handleLevelBtn(2)} style={{backgroundColor: mediumBackgroundColor}} disabled={disable} > Medium</MyButton>
                    <MyButton onClick={() => handleLevelBtn(3)} style={{backgroundColor: hardBackgroundColor}} disabled={disable} >Hard</MyButton>
                    </ButtonGroup>
                </h2>
            

                <div className="slider-holder">
                    <h2>Number of Exercises</h2>
                    <Slider defaultValue={5} getAriaValueText={valuetext} onChangeCommitted={(e, value)=> handleNum(value)} area-labelledby="discrete-slider" valueLabelDisplay="auto" step={2} min={3} max={15} style={{width: "240px", marginTop: "20px", marginLeft: "10px", color: "rgba(255, 255, 255, 0.7"}}
                ></Slider></div>
                
                <div className="slider-holder">
                    <h2>Interval length (Seconds)</h2>
                    <Slider defaultValue={45} onChangeCommitted={(e, value)=> handleTime(value)} area-labelledby="discrete-slider" valueLabelDisplay="auto" step={15} min={30} max={75} style={{width: "240px", marginLeft:"10px", marginTop:"20px", color: "rgba(255, 255, 255, 0.7"}}
                ></Slider>
                </div>

                <div className="slider-holder">
                    <h2>Number of Sets</h2>
                    <Slider defaultValue={3} onChangeCommitted={(e, value)=> handleSets(value)} area-labelledby="discrete-slider" valueLabelDisplay="auto" step={1} min={1} max={10} style={{width: "240px", marginLeft:"10px", marginTop:"20px", color: "rgba(255, 255, 255, 0.7"}}
                ></Slider>
                </div>

                {/*<button className = "challengeButton" onClick={challengeModeOn}> CHALLENGE MODE!</button>*/}
                {/*<button className = "challengebutton" style={{marginTop: "10px"}} onClick={handleSubmit}> Let's Go!</button>*/}
            </section>
        </div>
      );
}
 
export default Form;