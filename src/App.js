//NEED the app to have a capital A, because its a component
import React, {Component} from 'react';
import Greetings from './components/Greetings';
import Jokes from './components/Jokes';


function App() {
    return(
        <>
            <Greetings />
            <Jokes />
        </>
    )
}
export default App;