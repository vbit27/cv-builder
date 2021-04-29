import React, { FC } from 'react';

const Education: FC<Prop> = ({ educationList }) => {
  return (
    <div>
      {educationList.map((education) => (
        <div>
          <h4>{education.university}</h4>
          <h4>{education.city}</h4>
          <h4>{education.subject}</h4>
          <h4>{education.degree}</h4>
          <h4>{education.year}</h4>
        </div>
      ))}
    </div>
  );
};

interface Prop {
  educationList: Array<Studies>;
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
