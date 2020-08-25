import React from 'react';
import ReactDOM from 'react-dom';

// const sentence = React.createElement('h2', {}, 'Have you ever tried the JSX? Just try that and you will not regret');
// ReactDOM.render(sentence, document.getElementById('root'));

// Do you know that you can plug a number inside curly braces {} ?
// Let me show you how it works

// const header = <h1>Below you'll see the dialogue</h1>;
// ReactDOM.render(header,document.getElementById('dialogue'));

// const react = <h3>Me: I want to earn by {9+1} times more.</h3>;
// ReactDOM.render(react, document.getElementById('first'));

// const element = <h3>Friend: Do you have any idea how to increase your capital?</h3>;
// ReactDOM.render(element, document.getElementById('second'));


ReactDOM.render(header,document.getElementById('dialogue'));

const numeration = (
  <ol>Complete the following tasks:
    <li>Task 1</li>
    <li>Task 2</li>
    <li>Task 3</li>
  </ol>
);

ReactDOM.render(numeration, document.getElementById('main'));

const numbers = (
  <ul>The things you have got to do are:
    <li>Read a lot</li>
    <li>Do sports</li>
    <li>Travel</li>
  </ul>
);
ReactDOM.render(numbers, document.getElementById('secondary'));
