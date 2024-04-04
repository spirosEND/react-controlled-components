import { useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <ControlledComponent />
      <DropDown />
      <CheckBox />
    </div>
  );
}



function ControlledComponent() {
  const [inputValue, setInputValue] = useState('');
  
  const handleChange = (event) => {
      setInputValue(event.target.value);
  };
  
  return (
      <div>
      <form>
          <label>Input Value:
            <br></br>
              <input type="text" value ={inputValue} onChange={handleChange} />
          </label>
          <p>Input Value: {inputValue}</p>
      </form>
      </div>
  );
};




function DropDown() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        Select An Option:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <p>Selected option: {selectedOption}</p>
    </div>
  )
}



function CheckBox() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxChange = (event) => {
    setIsChecked(event.target.checked);

  };

  return (
    <form>
      <label htmlFor='color'>
        <input type="checkbox" name="color" checked={isChecked} onChange={handleCheckBoxChange}/>
        Red
      </label>
      {isChecked && <div>Blue is selected!</div>}
    </form>
  );
}


export default App;
 