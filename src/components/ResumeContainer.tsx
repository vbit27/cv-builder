import React, { FC, useState } from 'react';
import ExperienceList from './ExperienceList';
import PersonalData from './PersonalData';

const ResumeContainer: FC = () => {
  return (
    <div>
      <PersonalData />
      <ExperienceList />
    </div>
  );
};

export default ResumeContainer;
