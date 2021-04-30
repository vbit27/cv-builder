import React, { FC } from 'react';

const Education: FC<Prop> = ({ educationList, deleteEducation }) => {
  const handleDelete = (id: string) => {
    deleteEducation(id);
  };

  return (
    <div>
      {educationList.map((education) => (
        <div key={education.id}>
          <h4>{education.university}</h4>
          <h4>{education.city}</h4>
          <h4>{education.subject}</h4>
          <h4>{education.degree}</h4>
          <h4>{education.year}</h4>
          <button onClick={() => handleDelete(education.id)}>Delete</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  );
};

interface Prop {
  educationList: Array<Studies>;
  deleteEducation: (id: string) => void;
}

interface Studies {
  id: string;
  university: string;
  city: string;
  degree: string;
  subject: string;
  year: string;
}

export default Education;
