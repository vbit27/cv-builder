import React, { FC, useState } from 'react';
import { JobsList } from './types';
import ExperienceForm from './ExperienceForm';

const Experience: FC<Prop> = (props) => {
  const [edit, setEdit] = useState<JobsList>(initialState);

  const handleUpdate = (input: JobsList) => {
    props.updateExperience(input);
    setEdit(initialState);
  };

  const handleDelete = (id: string) => {
    props.deleteExperience(id);
  };

  const handleEdit = (job: JobsList) => {
    const currentValue = {
      id: job.id,
      position: job.position,
      company: job.company,
      city: job.city,
      start: job.start,
      end: job.end,
    };

    setEdit(currentValue);
  };

  if (edit.id) {
    return <ExperienceForm edit={edit} onSubmit={handleUpdate} />;
  }

  return (
    <div>
      {props.expList.map((job) => {
        return (
          <div key={job.id}>
            <h3>{job.position}</h3>
            <h3>{job.company}</h3>
            <h3>{job.city}</h3>
            <h3>{job.start}</h3>
            <h3>{job.end}</h3>
            <button onClick={() => handleDelete(job.id)}>Delete</button>
            <button onClick={() => handleEdit(job)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

const initialState = {
  id: '',
  position: '',
  company: '',
  city: '',
  start: '',
  end: '',
};

interface Prop {
  expList: JobsList[];
  deleteExperience: (id: string) => void;
  updateExperience: (value: JobsList) => void;
}

export default Experience;
