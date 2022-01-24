import React, {useState} from 'react';

const Greetings = () => {
    const [readCount, setReadcount] = useState(0);

    const increaseReadCount = () => setReadcount(prevState => prevState + 1);

    return(
        <h2 id="greeting">
            <span>{readCount}</span>
            <button onClick = {increaseReadCount}>Add one more</button>
        </h2>
    )
};

export default Greetings;