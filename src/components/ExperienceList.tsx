import React, { useState } from 'react';
import { JobsList } from './types';
import Experience from './Experience';
import ExperienceForm from './ExperienceForm';

function ExperienceList() {
  const [visibility, setVisibility] = useState(false);
  const [expList, setExpList] = useState<JobsList[]>([]);

  const handleSubmit = (exp: JobsList) => {
    setExpList([...expList, exp]);
    setVisibility(false);
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

export default ExperienceList;
