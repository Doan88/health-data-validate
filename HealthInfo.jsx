import React, { useState } from 'react';

function validateHCN(hcn) {
    let sum = 0;
    for (let i = 0; i < hcn.length; i++) {
      let num = parseInt(hcn[i]);
      if (i % 2 === 0) {
        num *= 2;
        if (num > 9) num -= 9;
      }
      sum += num;
    }
    return sum % 10 === 0;
  }
  
  function HealthInfo(props) {
    const [dob, setDob] = useState('');
    const [hcn, setHcn] = useState('');
    const [gender, setGender] = useState('');
  
    function handleSubmit() {

      const today = new Date().toISOString().split('T')[0];

      if (!validateHCN(hcn) || hcn.length !== 10) {
        alert('Invalid Health Card Number');
        return;
      }
      else if (!dob) {
        alert('Please enter a date of birth');
        return;
      }
      else if (dob > today) {
        alert('Date of birth cannot be in the future');
        return;
      }
      else if (gender === '') {
        alert('Please select your gender');
        return;  
      }
      else
        props.nextStep({ dob, hcn, gender });
    }
  
    return (
      <div>
        <h2>Health Information</h2>
        <label>Date of Birth:</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <br />
        <br />
        <label>Health Card Number:</label>
        <input
          type="text"
          value={hcn}
          onChange={(e) => setHcn(e.target.value)}
        />
        <br />
        <br />
        <label>Gender:</label>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <br />
        <br />
        
        <button onClick={handleSubmit}>Next</button>
      </div>
    );
  }
  

export default HealthInfo;

