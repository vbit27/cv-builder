import React, { useState } from 'react';

function ExperienceForm() {
  const [input, setInput] = useState('');
  return (
    <form>
      <label htmlFor="position">Position</label>
      <input type="text" name="position" />
      <label htmlFor="Company">Company</label>
      <input type="text" name="Company" />
      <label htmlFor="city">City</label>
      <input type="text" name="city" />
      <label htmlFor="from">From</label>
      <input type="date" name="from" />
      <label htmlFor="to">To</label>
      <input type="date" name="to" />
      <button type="submit">Submit</button>
      <button>Cancel</button>
    </form>
  );
}

export default ExperienceForm;
