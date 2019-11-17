import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import Welcome from './Welcome';
import Discuss from './Discuss';
import Party from './Party';
import Content from '../../components/Content';
import Dots from './Dots';
import Navigation from './Navigation'

const Onboarding = ({ id, go }: { id: 'onboarding'; go: (e: any) => void }) => {
  const [index, setIndex] = React.useState(0);
  const onChangeIndex = (newIndex: number) => setIndex(newIndex);
  return (
    <Content id={id} showLogo={index !== 0}>
      <SwipeableViews index={index} onChangeIndex={onChangeIndex}>
        <Welcome />
        <Discuss />
        <Party go={go} />
      </SwipeableViews>
      <Dots length={3} active={index} onChangeIndex={onChangeIndex} />
      <Navigation length={3} active={index} onChangeIndex={onChangeIndex} />
    </Content>
  );
};

export default Onboarding;
