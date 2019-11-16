import React from "react";
import SwipeableViews from "react-swipeable-views";
import Welcome from "./Welcome";
import Discuss from "./Discuss";
import Party from "./Party";
import Dots from "./Dots";

const Onboarding = ({ id }: { id: "onboarding" }) => {
  const [index, setIndex] = React.useState(0);
  const onChangeIndex = (newIndex: number) => setIndex(newIndex);
  return (
    <>
      <SwipeableViews
        style={{ height: "100vh" }}
        containerStyle={{ height: "100%" }}
        index={index}
        onChangeIndex={onChangeIndex}
      >
        <Welcome />
        <Discuss />
        <Party />
      </SwipeableViews>
      <Dots length={3} active={index} onChangeIndex={onChangeIndex} />
    </>
  );
};

export default Onboarding;
