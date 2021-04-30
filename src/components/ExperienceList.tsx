import React, { useState } from 'react';
import Experience from './Experience';
import ExperienceForm from './ExperienceForm';

function ExperienceList() {
  const [visibility, setVisibility] = useState(false);
  const [expList, setExpList] = useState<JobsList[]>([]);

  const handleSubmit = (exp: JobsList) => {
    setExpList([...expList, exp]);
    setVisibility(false);
    console.log(expList);
  };

  const deleteExperience = (id: string) => {
    setExpList(expList.filter((x) => x.id !== id));
  };

  const handleUpdate = (update: JobsList) => {
    const updatedValue = expList.map((job) =>
      update.id === job.id ? update : job
    );

    setExpList(updatedValue);
  };

  return (
    <div>
      <h2>Work Experience</h2>
      <button onClick={() => setVisibility(true)}>+ Add Job</button>
      {visibility ? (
        <ExperienceForm onSubmit={(exp) => handleSubmit(exp)} />
      ) : null}
      <Experience
        expList={expList}
        deleteExperience={(id) => deleteExperience(id)}
        updateExperience={(update) => handleUpdate(update)}
      />
    </div>
  );
}

interface JobsList {
  id: string;
  position: string;
  company: string;
  city: string;
  start: string;
  end: string;
}

export default ExperienceList;
