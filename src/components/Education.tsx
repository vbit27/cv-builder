import React, { FC, useState } from 'react';
import { Studies } from './types';
import { MdModeEdit, MdDelete } from 'react-icons/md';

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
        <div key={education.id} className="education-container">
          <h4>{education.degree}</h4>
          <h4>{education.subject}</h4>
          <h5>{education.university}</h5>
          <h5>{education.city}</h5>
          <h5>{education.year}</h5>
          <button id="button" onClick={() => handleDelete(education.id)}>
            <MdDelete />
          </button>
          <button id="button" onClick={() => handleEdit(education)}>
            <MdModeEdit />
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

export default Education;
