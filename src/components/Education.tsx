import React, { FC, useState } from 'react';
import { Studies } from './types';

import EducationForm from './EducationForm';

const Education: FC<Prop> = (props) => {
  const [edit, setEdit] = useState<Studies>(initialState);

  const handleDelete = (id: string) => {
    props.deleteEducation(id);
  };

  const handleUpdate = (input: Studies) => {
    props.updateEducation(input);
    setEdit(initialState);
  };

  const handleEdit = (education: Studies) => {
    const currentValue = {
      id: education.id,
      university: education.university,
      city: education.city,
      degree: education.degree,
      subject: education.subject,
      year: education.year,
    };

    setEdit(currentValue);
  };

  if (edit.id) {
    return <EducationForm edit={edit} onSubmit={handleUpdate} />;
  }
  return (
    <div>
      {props.educationList.map((education) => (
        <div key={education.id}>
          <h4>{education.university}</h4>
          <h4>{education.city}</h4>
          <h4>{education.subject}</h4>
          <h4>{education.degree}</h4>
          <h4>{education.year}</h4>
          <button onClick={() => handleDelete(education.id)}>Delete</button>
          <button onClick={() => handleEdit(education)}>Edit</button>
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

export default Education;
