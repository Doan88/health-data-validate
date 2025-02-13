import React from 'react';

function Summary(props) {
    return (
      <div>
        <h2>Summary</h2>
        <p>First Name: {props.info.firstName}</p>
        <p>Last Name: {props.info.lastName}</p>
        <p>Date of Birth: {props.info.dob}</p>
        <p>Health Card Number: {props.info.hcn}</p>
        <p>Gender: {props.info.gender}</p>
      </div>
    );
  }

export default Summary;
