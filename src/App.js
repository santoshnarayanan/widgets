import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/translate";

const items =[
    {
        title: 'What is React?',
        content: 'React is javascript front-end framework'
    },
    {
        title: 'Why use React?',
        content: 'React is favourite js library'
    },
    {
        title: 'How do you use React?',
        content: 'React is used by creating components'
    }

];

const options = [
  {
    label: "The Color Red",
    value: "Red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "The Color Blue",
    value: "Blue",
  },
];

//! shows menu item
const showAccordion = () =>{
  if(window.location.pathname === '/'){
    return <Accordion items={items} />;
  }
}

//! shows menu item
const showList = () =>{
  if(window.location.pathname === '/list'){
    return <Search />;
  }
}

//! shows menu item
const showDropDown = () =>{
  if(window.location.pathname === '/dropdown'){
    return <Dropdown />;
  }
}

//! shows menu item
const showTranslate = () =>{
  if(window.location.pathname === '/translate'){
    return <Translate />;
  }
}

const App = () => {

  return (
    <div>
        {showAccordion()};
        {showList()}
        {showDropDown()}
        {showTranslate()}
    </div>
  );
};

export default App;
