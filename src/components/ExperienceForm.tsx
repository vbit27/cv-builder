import React, { FC, useState } from 'react';

const ExperienceForm: FC = () => {
  const [input, setInput] = useState<JobsList>({
    id: 0,
    position: '',
    company: '',
    city: '',
    start: '',
    end: '',
  });

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    const newValue = { ...input, [e.target.name]: e.target.value };
    setInput(newValue);
    console.log(input);
  };
  return (
    <form>
      <label htmlFor="position">Position</label>
      <input type="text" name="position" onChange={handleChange} />
      <label htmlFor="Company">Company</label>
      <input type="text" name="company" onChange={handleChange} />
      <label htmlFor="city">City</label>
      <input type="text" name="city" onChange={handleChange} />
      <label htmlFor="from">From</label>
      <input type="date" name="start" onChange={handleChange} />
      <label htmlFor="to">To</label>
      <input type="date" name="end" onChange={handleChange} />
      <button type="submit">Submit</button>
      <button>Cancel</button>
    </form>
  );
};

interface JobsList {
  id: number;
  position: string;
  company: string;
  city: string;
  start: string;
  end: string;
}

export default ExperienceForm;
