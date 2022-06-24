import React from "react";
//import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

// const items =[
//     {
//         title: 'What is React?',
//         content: 'React is javascript front-end framework'
//     },
//     {
//         title: 'Why use React?',
//         content: 'React is favourite js library'
//     },
//     {
//         title: 'How do you use React?',
//         content: 'React is used by creating components'
//     }

// ];

const options = [
    {
        label:'The Color Red',
        value:'Red'
    },
    {
        label:'The Color Green',
        value:'Green'
    },
    {
        label:'The Color Blue',
        value:'Blue'
    }
];


const App = () => {
    return (
    <div>
        <Dropdown options ={options} />
    </div>
    );
};

export default App;