import React, { useState } from 'react';
import PersonalInfo from './PersonalInfo';
import HealthInfo from './HealthInfo';
import Summary from './Summary';

function App() {
  const [userInfo, setInfo] = useState({});
  const [step, setStep] = useState(1);

  function userInputData(newData) {
    setInfo({ ...userInfo, ...newData });
    setStep(step + 1);
  }

  return (
    <div>
      <h1>Personal Info Form</h1>

      {step === 1 && <PersonalInfo nextStep={userInputData} />}
      {step === 2 && <HealthInfo nextStep={userInputData} />}
      {step === 3 && <Summary info={userInfo} />}
    </div>
  );
}

export default App;
