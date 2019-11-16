import React from "react";
import SwipeableViews from "react-swipeable-views";
import Welcome from "./Welcome";
import Discuss from "./Discuss";
import Party from "./Party";

const Onboarding = ({ id, style }: { id: "onboarding"; style: any }) => (
  <SwipeableViews style={{ height: "100vh" }}>
    <Welcome />
    <Discuss />
    <Party />
  </SwipeableViews>
);

export default Onboarding;
