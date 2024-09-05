import React, { useState } from 'react';


function HookUseSate() {

    const [name, setName] = useState("Guest");
   const [age, setAge] = useState(0);
   const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Michael Jay")
    }
    
    const incrementAge = () => {
        setAge(age + 1)
    }
     
    
    const toggleisEmployed = () => {
        setIsEmployed(!isEmployed)
    }
     
     

    return ( <>
    <p>Name: {name}</p>
    <button onClick={updateName}>Set Name</button>
  
    <p>Age: {age}</p>
    <button onClick={incrementAge}>Increment Age</button>
   
    <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
    <button onClick={toggleisEmployed}>Toggle Status</button>
   
    <br />
    <hr />
    <br />
    <br />

    </> );
}

export default HookUseSate;