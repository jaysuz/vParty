import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './ideation.css';
import Header from '../../components/Header';
import firebase from "../../firebase"

const db = firebase.firestore()

const Ideation = props => {

  const [themes, updateThemes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const snapshot = await db.collection('themes').get();
      const suggestions = [];
      snapshot.forEach(doc => {
        suggestions.push({name: doc.id, image: doc.data().imageUrl});
      });
      updateThemes(suggestions);
    };
    fetchData().catch(error => console.error(error));
  }, []);

  return (
      <div id={props.id}>
        <Header showLogo={true}/>
        <div className="title">Your Party Theme</div>

        <div className="themes-container">
          {themes.map((theme, i) =>
              <div className="theme-card" key={i}
                   onClick={() => {
                     props.updateTheme(theme.name);
                     props.go('suggestion');
                   }}>
                <img className="theme-image" width={171} height={100}
                     src={theme.image} alt={theme.name}/>
                <div className="theme-name">{theme.name}</div>
              </div>,
          )}
        </div>

        <div className="footer">
          <button className="button-no-theme"
                  onClick={() => props.go('suggestion')}>
            I don't want a theme
          </button>
        </div>
      </div>
  );
};

Ideation.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
  updateTheme: PropTypes.func.isRequired,
  suggestions: PropTypes.array.isRequired,
  selectedTheme: PropTypes.string,
};

export default Ideation;
