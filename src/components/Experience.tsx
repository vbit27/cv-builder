import React, { FC } from 'react';

const Experience: FC<Prop> = ({ expList }) => {
  return (
    <div>
      {expList.map((job) => {
        return (
          <div key={job.id}>
            <h3>{job.position}</h3>
            <h3>{job.company}</h3>
            <h3>{job.city}</h3>
            <h3>{job.start}</h3>
            <h3>{job.end}</h3>
            <button>Delete</button>
            <button>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

interface Prop {
  expList: JobsList[];
}

interface JobsList {
  id: string;
  position: string;
  company: string;
  city: string;
  start: string;
  end: string;
}
export default Experience;
