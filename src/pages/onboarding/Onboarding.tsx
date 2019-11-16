import React from "react";
import SwipeableViews from "react-swipeable-views";

import {
  Panel,
  ListItem,
  Button,
  Group,
  Div,
  Avatar,
  PanelHeader
} from "@vkontakte/vkui";

import Welcome from "./Welcome";
import Discuss from "./Discuss";
import Party from "./Party";

const Onboarding = ({ id }: { id: "onboarding" }) => (
  <Panel id={id}>
    <PanelHeader>Example</PanelHeader>
    <SwipeableViews>
      <Welcome />
      <Discuss />
      <Party />
    </SwipeableViews>
  </Panel>
);

export default Onboarding;
