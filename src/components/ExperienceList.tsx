import React, { useState } from 'react';
import Experience from './Experience';
import ExperienceForm from './ExperienceForm';

function ExperienceList() {
  const [visibility, setVisibility] = useState(false);
  const [expList, setExpList] = useState<JobsList[]>([]);

  return (
    <div>
      <h2>Work Experience</h2>
      <button onClick={() => setVisibility(true)}>+ Add Job</button>
      {visibility ? <ExperienceForm /> : null}
      <Experience expList={expList} />
    </div>
  );
}

interface JobsList {
  id: number;
  position: string;
  company: string;
  city: string;
  start: string;
  end: string;
}

export default ExperienceList;
