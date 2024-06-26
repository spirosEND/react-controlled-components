import { useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <ControlledComponent />
      <br />
      <DropDown />
      <br />
      <CheckBox />
      <br />
      <Multiple />
      <br />
      <MyForm />
      <br />
      <Login />
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
      <br />
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}/>
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}/>
      <br />
      <label htmlFor="message">Message:</label>
      <br />
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}


function MyForm() {

  const [inputValue, setInputValue] = useState('');
  const [inputError, setInputError] = useState(null);


  function handleInputChange(event) {
    const value = event.target.value;
    setInputValue(value);

    if(value.length < 5) {
      setInputError('Input must be at least 5 characters');
    }else{
      setInputError(null);
    }
  }

  function handleSubmit(event) {
    event.preventDefalt();
    if (inputValue.length >= 5) {
     
     

    }else{
      setInputError('Input must be at least 5 characters');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Fruit:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
      <button type="submit">Submit</button>
    </form>
  );
} 


function Login() {
  return (
    <form>
      <label>
        Username:
        <input type="text" name="username" placeholder='Username..'/>
      </label>
      <label>
        Password:
        <input type="password" name="password" placeholder='Password..'/>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}



export default App;
 