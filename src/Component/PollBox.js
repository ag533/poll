import ProgressBar from './ProgressBar';
import React from 'react';

const PollBox = ({data}) => {
    const box = {
        backgroundColor: 'white',
        width: '32vw',
        height: '28vh',
        borderRadius: '3%',
        paddingTop: '1.5%'
    }

    let top = 0;
    let sum = 0;
    const total = Object.keys(data).map(key => { 
        sum = sum + data[key];
        if(top < data[key]) {
            top = data[key];
        }
    })

    const bars = Object.keys(data).map(key => {
        return <ProgressBar progress={data[key]/top*100} text={key} votes={data[key]} percent={(data[key]/sum)*100}/>
    });

    return (
        <div style={box}>
                {bars}
        </div>
    )
}

export default PollBox;