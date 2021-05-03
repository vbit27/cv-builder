import React, { FC, useState } from 'react';
import { JobsList } from './types';
import ExperienceForm from './ExperienceForm';
import { MdModeEdit, MdDelete } from 'react-icons/md';

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
          <div key={job.id} className="experience-container">
            <div className="date">
              <h3>{job.start}</h3>
              <h3>{job.end}</h3>
            </div>
            <div className="description">
              <h3>{job.position}</h3>
              <h5>{job.company}</h5>
              <h5>{job.city}</h5>
            </div>
            <div className="buttons">
              <button id="button" onClick={() => handleDelete(job.id)}>
                <MdDelete />
              </button>
              <button id="button" onClick={() => handleEdit(job)}>
                <MdModeEdit />
              </button>
            </div>
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
