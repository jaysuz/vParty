import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Ideation = props => {
  const [themes, updateThemes] = useState([]);

  useEffect(() => {
    props.db
      .collection('themes')
      .get()
      .then(snapshot => {
        updateThemes(snapshot.docs.map(doc => doc.id));
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div id={props.id}>
      <button onClick={() => props.go('onboarding')}>back</button>
      <h1>Choose Theme</h1>
      <div>Tell us more about your event!</div>
      <div>Select Theme:</div>

      {themes.map((theme, i) => (
        <div key={i} onClick={() => props.updateTheme(theme)}>
          {theme}
          <br />
        </div>
      ))}

      <button onClick={() => props.go('suggestion')}>Continue</button>
    </div>
  );
};

Ideation.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  updateTheme: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  db: PropTypes.object
};

export default Ideation;
