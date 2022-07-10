import React,{useState} from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  //! Here items property is passed as children to Route
  return (
    <div>
        <Header />
        <Route path="/">
          <Accordion  items={items}/> 
        </Route>
        <Route path="/list">
          <Search /> 
        </Route>
        <Route path="/dropdown">
          <Dropdown  label = "Select a color" 
              options={options}
              selected={selected} 
              onSelectedChange={setSelected}/> 
        </Route>
        <Route path="/translate">
          <Translate /> 
        </Route>
    </div>
  );
};

export default App;
