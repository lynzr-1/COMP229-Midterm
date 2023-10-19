import React from 'react';
import './checkbox.css';

function Checkbox({ options, register }) {
  return (
    <div> {/* Wrap the radio buttons in a div */}
      {options.map((option, index) => (
        <label key={index} className="checkbox__text">
          <input
            type="radio"
            name="qualifications" // Use a consistent name for the radio group
            value={option}
            {...register('qualifications', { required: true })}
          />
          {option}
        </label>
      ))}
    </div>
  );
}

export default Checkbox;
