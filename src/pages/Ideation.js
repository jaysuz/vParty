import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const Ideation = props => {

  const [themes, updateThemes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await props.db.collection('themes').get();
      const suggestions = [];
      snapshot.forEach(doc => {
        suggestions.push(doc.id);
      });
      updateThemes(suggestions);
    };
    fetchData().catch(error => console.error(error));
  }, []);

  return (
    <div id={props.id}>
      <button onClick={props.go} data-to="start">back</button>
      <h1>Choose Theme</h1>
      <div>Tell us more about your event!</div>
      <div>Select Theme:</div>

      {themes.map((theme, i) => (
          <div key={i} onClick={() => props.updateTheme(theme)}>{theme}<br/></div>
      ))}

      <button onClick={props.go} data-to="suggestion">
        Continue
      </button>
    </div>
  )
};

Ideation.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  updateTheme: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  selectedTheme: PropTypes.string,
  db: PropTypes.object
};

export default Ideation;
