import { useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <ControlledComponent />
      <DropDown />
      <CheckBox />
      <Multiple />
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
          <p>You Typed: {inputValue}</p>
      </form>
      </div>
  );
};




function DropDown() {
  const [selectedOption, setSelectedOption] = useState('');
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
      {isChecked && <div>Red is selected!</div>}
    </form>
  );
}


function Multiple() {
  const [formData, setFormData] = useState({name: "",email: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`
    );
};

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>

      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
 