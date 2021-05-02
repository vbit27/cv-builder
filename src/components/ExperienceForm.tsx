import React, { FC, useState } from 'react';
import { JobsList } from './types';
import { v4 as uuid } from 'uuid';

const ExperienceForm: FC<Prop> = (props) => {
  const [input, setInput] = useState<JobsList>(
    props.edit
      ? props.edit
      : {
          id: uuid(),
          position: '',
          company: '',
          city: '',
          start: '',
          end: '',
        }
  );

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    const newValue = { ...input, [e.target.name]: e.target.value };
    setInput(newValue);
  };

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
    e
  ) => {
    e.preventDefault();
    props.onSubmit(input);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="position">Position</label>
        <input
          type="text"
          name="position"
          value={input.position}
          onChange={handleChange}
        />

        <label htmlFor="Company">Company</label>
        <input
          type="text"
          name="company"
          value={input.company}
          onChange={handleChange}
        />
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={input.city}
          onChange={handleChange}
        />
        <label htmlFor="from">From</label>
        <input
          type="date"
          name="start"
          value={input.start}
          onChange={handleChange}
        />
        <label htmlFor="to">To</label>
        <input
          type="date"
          name="end"
          value={input.end}
          onChange={handleChange}
        />
        <button type="submit">{props.edit ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
};

interface Prop {
  onSubmit: (input: JobsList) => void;
  edit?: JobsList;
}

export default ExperienceForm;
