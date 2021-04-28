import React, { FC, FormEvent, useState } from 'react';
import './PersonalData.css';

const PersonalData: FC = () => {
  const [info, setInfo] = useState<Info>({
    name: '',
    surname: '',
    email: '',
    phone: '',
  });

  const [editMode, setEditMode] = useState(true);

  const handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void = (
    e
  ) => {
    const newValue = { ...info, [e.target.name]: e.target.value };
    setInfo(newValue);
  };

  const handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void = (
    e
  ) => {
    e.preventDefault();
    setInfo(info);
    setEditMode(false);
  };

  const switchToEdit: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void = () => {
    setEditMode(true);
  };

  if (!editMode) {
    return (
      <div>
        <h1>{info.name}</h1>
        <h2>{info.surname}</h2>
        <h2>{info.email}</h2>
        <h2>{info.phone}</h2>
        <button onClick={switchToEdit}>Edit</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">First Name</label>
      <input
        type="text"
        value={info.name}
        onChange={handleChange}
        name="name"
      />
      <label htmlFor="surname">Last Name</label>
      <input
        type="text"
        value={info.surname}
        onChange={handleChange}
        name="surname"
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        value={info.email}
        onChange={handleChange}
        name="email"
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        value={info.phone}
        onChange={handleChange}
        name="phone"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

interface Info {
  name: string;
  surname: string;
  email: string;
  phone: string;
}

export default PersonalData;
