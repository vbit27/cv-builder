import React, { FC, useState } from 'react';
import { v4 as uuid } from 'uuid';

const EducationForm: FC<Prop> = (props) => {
  const [input, setInput] = useState<Studies>(
    props.edit
      ? props.edit
      : {
          id: uuid(),
          university: '',
          city: '',
          degree: '',
          subject: '',
          year: '',
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="university">University</label>
          <input
            type="text"
            name="university"
            value={input.university}
            onChange={handleChange}
          />
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            value={input.city}
            onChange={handleChange}
          />
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            value={input.degree}
            onChange={handleChange}
          />
          <label htmlFor="Subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={input.subject}
            onChange={handleChange}
          />
          <label htmlFor="year">Year</label>
          <input
            type="date"
            name="year"
            value={input.year}
            onChange={handleChange}
          />
          <button type="submit">{props.edit ? 'Update' : 'Submit'}</button>
        </div>
      </form>
    </div>
  );
};

interface Prop {
  onSubmit: (input: Studies) => void;
  edit?: Studies;
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
