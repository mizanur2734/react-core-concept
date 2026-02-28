import React, { useState } from 'react';

const BatsMan = () => {
    const [runs , setRuns] = useState(0)
    const handleSingle = ()=>{
        const newRuns = runs + 1
        setRuns(newRuns)
    }
    const handleFour = ()=>{
        const newRuns4 = runs + 4
        setRuns(newRuns4)
    }
    const handleSix = ()=>{
        const newRuns6 = runs + 6
        setRuns(newRuns6)
    }
    return (
        <div>
            <h3>Player: Bangla Batsman</h3>
            <h1>Score: {runs}</h1>
            <button onClick={handleSingle}>Singles</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six</button>
        </div>
    );
};

export default BatsMan;