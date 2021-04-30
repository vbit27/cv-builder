import React, { useState } from 'react';
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
    console.log(educationList);
  };

  const handleDelete = (id: string) => {
    setEducationList(educationList.filter((x) => x.id !== id));
  };
  return (
    <div>
      <h1>Education</h1>
      <button onClick={handleVisibility}>+ Add Education</button>
      {visibility ? (
        <EducationForm onSubmit={(input) => handleSubmit(input)} />
      ) : null}
      <Education
        educationList={educationList}
        deleteEducation={(id) => handleDelete(id)}
      />
    </div>
  );
}

interface Studies {
  id: string;
  university: string;
  city: string;
  degree: string;
  subject: string;
  year: string;
}

export default EducationList;
