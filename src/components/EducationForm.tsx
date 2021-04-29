import React, { FC, useState } from 'react';

const EducationForm: FC<Prop> = (props) => {
  const [input, setInput] = useState({
    id: '',
    university: '',
    city: '',
    degree: '',
    subject: '',
    year: '',
  });

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    setInput({ ...input, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
    e
  ) => {
    e.preventDefault();
    props.onSubmit(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="university">University</label>
        <input type="text" name="university" onChange={handleChange} />
        <label htmlFor="city">City</label>
        <input type="text" name="city" onChange={handleChange} />
        <label htmlFor="degree">Degree</label>
        <input type="text" name="degree" onChange={handleChange} />
        <label htmlFor="Subject">Subject</label>
        <input type="text" name="Subject" onChange={handleChange} />
        <label htmlFor="year">Year</label>
        <input type="date" name="year" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

interface Prop {
  onSubmit: (input: Studies) => void;
}

interface Studies {
  id: string;
  university: string;
  city: string;
  degree: string;
  subject: string;
  year: string;
}

export default EducationForm;
