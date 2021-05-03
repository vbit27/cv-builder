import React, { useState } from 'react';
import { Studies } from './types';
import Education from './Education';
import EducationForm from './EducationForm';

function EducationList() {
  const [visibility, setVisibility] = useState(false);
  const [educationList, setEducationList] = useState<Array<Studies>>([]);

  const handleVisibility = () => {
    setVisibility(true);
  };

  const handleSubmit = (input: Studies) => {
    setEducationList([...educationList, input]);
    setVisibility(false);
  };
  const handleUpdate = (update: Studies) => {
    const updatedEducation = educationList.map((education) =>
      update.id === education.id ? update : education
    );

    setEducationList(updatedEducation);
  };
  const handleDelete = (id: string) => {
    setEducationList(educationList.filter((x) => x.id !== id));
  };
  return (
    <div>
      <div className="title-button">
        <h2>Education</h2>
        <button onClick={handleVisibility}>+ Add</button>
      </div>
      {visibility ? (
        <EducationForm onSubmit={(input) => handleSubmit(input)} />
      ) : null}
      <Education
        educationList={educationList}
        deleteEducation={(id) => handleDelete(id)}
        updateEducation={(update) => handleUpdate(update)}
      />
    </div>
  );
}

export default EducationList;
