import React, { FormEvent, useState } from 'react';
import './PersonalData.css';

interface Info {
  name: string;
  surname: string;
  email: string;
  phone: string;
  editing: boolean;
}

function PersonalData(props: any) {
  const [info, setInfo] = useState<Info>({
    name: '',
    surname: '',
    email: '',
    phone: '',
    editing: true,
  });

  const handleChange = (e: any) => {
    const newValue = { ...info, [e.target.name]: e.target.value };
    setInfo(newValue);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setInfo({ ...info, editing: false });
    props.onSubmit(info);
  };

  const switchSubmitted = () => {
    setInfo({ ...info, editing: true });
  };

  if (!info.editing) {
    return (
      <div>
        <h1>{info.name}</h1>
        <h2>{info.surname}</h2>
        <button onClick={switchSubmitted}>Edit</button>
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
}

export default PersonalData;
