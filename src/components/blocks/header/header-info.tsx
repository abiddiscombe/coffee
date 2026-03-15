"use client";

import { InfoIcon } from "lucide-react";
import { Button } from "../../elements/button";
import { Icon } from "../../elements/icon";

export const HeaderInfo = () => {
  return (
    <Button width="box">
      <Icon>
        <InfoIcon />
      </Icon>
    </Button>
  );
};
