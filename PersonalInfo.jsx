import React, { useState } from 'react';

function PersonalInfo(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
  
    const handleSubmit = () => {
      if (!firstName || !lastName) {
        alert('Please fill in all fields');
        return;
      }
      else if (firstName.length < 2 || lastName.length < 2) {
        alert('First and last name must be at least 2 characters long');
        return;
      }
      else if (firstName.length > 20 || lastName.length > 20) {
        alert('First and last name must be at most 20 characters long');
        return;
      }
      else if (!/^[a-zA-Z]+$/.test(firstName) || !/^[a-zA-Z]+$/.test(lastName)) {
        alert('First and last name must contain only letters');
        return;
      }
      else
        props.nextStep({ firstName, lastName });
    };
  
    return (
      <div>
        <h2>Personal Information</h2>
        <label>First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Next</button>
      </div>
    );
  }
  
export default PersonalInfo;
