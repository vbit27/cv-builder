import React, { useState } from 'react';
import PersonalData from './PersonalData';

function ResumeContainer() {
  const [finalInfo, setFinalInfo] = useState({});

  const addPersonalInfo = (input: any) => {
    setFinalInfo(input);
    console.log(finalInfo);
  };

  return (
    <div>
      <PersonalData onSubmit={addPersonalInfo} />
    </div>
  );
}

export default ResumeContainer;
