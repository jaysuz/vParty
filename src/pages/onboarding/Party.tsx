import React from "react";
import { Button } from "@vkontakte/vkui";

const Party = ({ go }: { go: (e: any) => void }) => {
  return (
    <div style={{ marginTop: 100 }}>
      <Button size="xl" level="2" onClick={go} data-to="ideation">
        Let's go
      </Button>
    </div>
  );
};
export default Party;
