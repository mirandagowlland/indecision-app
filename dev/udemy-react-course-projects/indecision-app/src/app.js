// install -> import -> use
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


//KEEP BELOW FOR REFERENCE - TRANSFORM CLASS PROPERTIES SYNTAX
//demo standard syntax with class properties transform plug--in
//https://babeljs.io/docs/plugins/transform-class-properties/

// class OldSyntax {
//     constructor() {
//         this.name = "Mike";
//     }
//     getGreeting() {
//         return `Hi my name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// console.log(oldSyntax.getGreeting());
// //---------------
// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () => {
//         return `Hi my name is ${this.name}.`
//     }
// }
// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());







//JSX EARLY CODE
// console.log ("app.js is running");
//
// const app = {
//     title:"Indecision App",
//     subtitle:"put your life in the hands of comp",
//     options: []
// }
//
// const onFormSubmit = (e) => {
//     e.preventDefault();
//     const option = e.target.elements.option.value;
//     if (option) {
//         app.options.push(option);
//         e.target.elements.option.value = "";
//         renderOptions();
//         //rerender
//     }
// };
//
// const removeOptions = () => {
//     app.options.length = 0;
//     //COULD ALSO BE app.options = [];
//     renderOptions();
// }
//
// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * app.options.length);
//     const option = app.options[randomNum];
//     alert(option);
// }
//
// var appRoot = document.getElementById("app");
//
// //const numbers = [55, 101, 1000];
//
// const renderOptions = () => {
//     const template = (
//     <div>
//         <h1>{app.title}</h1>
//         {app.subtitle && <p>{app.subtitle}</p>}
//         <p>{app.options.length>0 ? "Here are your options:" : "No Options"}</p>
//         <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should I do?</button>
//
//         <button onClick={removeOptions}>Remove All</button>
//         <ol>
//             {app.options.map((option) => {
//                 return <li key={option}>{option}</li>;
//             })
//             }
//         </ol>
//         <form onSubmit={onFormSubmit}>
//             <input type="text" name="option"/>
//             <button>Add Option</button>
//         </form>
//     </div>
//     );
//
//     ReactDOM.render(template, appRoot);
// };
//
// renderOptions();
