import React from 'react'
  
const ProgressBar = ({progress,text,votes,percent}) => {

    const outerContainer = {
        width: '30vw',
        height: '6vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right',
        paddingLeft: '10%',
        paddingBottom: '0.9%'
    }

    const variableContainer = {
        width: '6vw',
        height: '5.9vh',
        position: 'relative',
        margin: '1px',
        paddingTop: '8%',
        textAlign: 'right',
        paddingRight: '1vw',
        fontWeight: '600',
        fontSize: 14
    }

    const progressBarContainer = {
        width: `${20*progress/100}vw`,
        height: '5.9vh',
        position: 'relative',
        margin: '1px',
        borderRadius: 10,
        backgroundColor: (text === 'Vanilla') ? '#CAB651' 
                        : (text === 'Chocolate') ? '#4885CB'
                        : (text === 'Caramel') ? '#AF4343' : '#48A94D'
    }

    const box = {
        width: `${32*progress/100/3}vh`,
        height: '100%',            
        position: 'relative',
        top: 0,
        left: 0,
        float: 'right',
        textAlign: 'right',
        paddingTop: `2vh`,
        fontSize: 14,
        marginRight: '7%',
        color: '#FFFFFF',
        fontWeight: '600'
    }

    const stackTop = {
        width: `${32*progress/100}vh`,
        height: '100%',            
        position: 'absolute',
        top: 0,
        left: 0,
        float: 'left',
        textAlign: 'left',
        paddingTop: '2vh',
        paddingLeft: '10px',
        fontSize: 14,
        color: 'white',
        fontWeight: '600'
    }
        
    return (
        <div style={outerContainer}>
            <div style={variableContainer}>
                {text}
                {console.log(text)}
            </div>
            <div style={progressBarContainer}>
                { progress >= 50 ? <div style={box}> {Math.floor(percent)}%</div> :  <div/>}
                <div style={stackTop}>{votes} votes</div>
            </div>
            { progress < 50 ? <span style={{paddingLeft: 20, fontSize: 14}}>{Math.floor(percent)}%</span> : "" }
        </div>
    )
}
  
export default ProgressBar;