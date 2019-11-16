import React from 'react';
import PropTypes from 'prop-types';

const Ideation = props => (
    <div id={props.id}>
      <button onClick={props.go} data-to="onboarding">back</button>
      <h1>Choose Theme</h1>
      <div>Tell us more about your event!</div>
      <div>Select Theme:</div>

      {props.suggestions.map((theme, i) => (
          <div key={i} onClick={() => props.updateTheme(theme)}>{theme}<br/></div>
      ))}

      <button onClick={props.go} data-to="suggestion">
        Continue
      </button>
    </div>
);

Ideation.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  updateTheme: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  selectedTheme: PropTypes.string,
};

export default Ideation;
