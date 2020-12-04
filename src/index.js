import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
    return 'Click on Me';
}

const App = () => {
    const buttonText = { text: 'Click Me'};
    const buttonStyle = {backgroundColor: 'blue', color: 'white'}
    return <div>
        <label className="label" for="name">Enter name:</label>
        <input id="name" type="text"/>
        {/* {{}} First curly braces indicates we want to send a javastript variable. The second, The javascript object itself */}
        {/* conventions - always use "" anytime we are using , single quotes for any non-jsx properties*/}
        <button style={buttonStyle}>{buttonText.text}</button>
    </div>
}

ReactDOM.render(<App/>, document.querySelector('#root'));