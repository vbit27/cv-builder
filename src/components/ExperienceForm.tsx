import React, { FC, useState } from 'react';
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

  const handleCancelation = () => {};

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
    e
  ) => {
    e.preventDefault();
    props.onSubmit(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      {props.edit ? (
        <div>
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
          <button type="submit">Update</button>
        </div>
      ) : (
        <div>
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
        </div>
      )}
    </form>
  );
};

interface Prop {
  onSubmit: (input: JobsList) => void;
  edit?: JobsList;
}

interface JobsList {
  id: string;
  position: string;
  company: string;
  city: string;
  start: string;
  end: string;
}

export default ExperienceForm;
