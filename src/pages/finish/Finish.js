import React from 'react';
import './finish.css';
import Header from '../../components/Header';

const Finish = ({id, go}) => {

  return (
      <div id={id}>
        <Header showLogo={true}/>
        <div className="title">You've purchased all your items</div>

        <div className="cat-image-wrapper">
          <img className="cat-image" width={171} height={100}
               src={require('../../img/persik.png')} alt='cat'/>
        </div>

        <div className="footer">
          <button className="button-no-theme"
                  onClick={() => go('onboarding')}>
            More Party!
          </button>
        </div>
      </div>
  );
};

export default Finish;
