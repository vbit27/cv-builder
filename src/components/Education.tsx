import React, { FC, useState } from 'react';
import EducationForm from './EducationForm';

const Education: FC<Prop> = ({
  educationList,
  deleteEducation,
  updateEducation,
}) => {
  const [edit, setEdit] = useState<Studies>(initialState);

  const handleDelete = (id: string) => {
    deleteEducation(id);
  };

  const handleUpdate = (input: Studies) => {
    updateEducation(input);
    setEdit(initialState);
  };

  if (edit.id) {
    return <EducationForm edit={edit} onSubmit={handleUpdate} />;
  }
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
          <button
            onClick={() =>
              setEdit({
                id: education.id,
                university: education.university,
                city: education.city,
                degree: education.degree,
                subject: education.subject,
                year: education.year,
              })
            }
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

const initialState = {
  id: '',
  university: '',
  city: '',
  degree: '',
  subject: '',
  year: '',
};

interface Prop {
  educationList: Array<Studies>;
  deleteEducation: (id: string) => void;
  updateEducation: (update: Studies) => void;
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
