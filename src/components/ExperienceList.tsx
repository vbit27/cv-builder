import React, { useState } from 'react';
import Experience from './Experience';
import ExperienceForm from './ExperienceForm';

function ExperienceList() {
  const [visibility, setVisibility] = useState(false);
  const [expList, setExpList] = useState({});

  const toggleForm = () => {
    setVisibility(true);
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <button onClick={toggleForm}>+ Add Job</button>
      {visibility ? <ExperienceForm /> : null}
      <Experience />
    </div>
  );
}

export default ExperienceList;
