import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Welcome from './Welcome';
import Discuss from './Discuss';
import Party from './Party';
import Dots from './Dots';
import Header from '../../components/Header';

const Onboarding = ({ id, go }: { id: 'onboarding'; go: (e: any) => void }) => {
  const [index, setIndex] = React.useState(0);
  const onChangeIndex = (newIndex: number) => setIndex(newIndex);
  return (
    <div id={id}>
      <Header showLogo={index !== 0} />
      <SwipeableViews
        style={{ height: '100vh' }}
        containerStyle={{ height: '100%' }}
        index={index}
        onChangeIndex={onChangeIndex}
      >
        <Welcome />
        <Discuss />
        <Party go={go} />
      </SwipeableViews>
      <Dots length={3} active={index} onChangeIndex={onChangeIndex} />
    </div>
  );
};

export default Onboarding;
