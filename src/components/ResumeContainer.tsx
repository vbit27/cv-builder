import React, { FC } from 'react';
import EducationList from './EducationList';
import ExperienceList from './ExperienceList';
import PersonalData from './PersonalData';

const ResumeContainer: FC = () => {
  return (
    <div>
      <PersonalData />
      <ExperienceList />
      <EducationList />
    </div>
  );
};

export default ResumeContainer;
