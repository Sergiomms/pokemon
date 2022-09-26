import React from "react";
import px2vw from "../../utils/responsiviness/px2vw";
import { Bar } from "./styles";

export function StatusBar(props) {

  const count = props.statusValue;
  let barPercent = count / 2;
  const height = props.height ? px2vw(props.height) : px2vw(10);

  if(barPercent > 100){
    barPercent = 100;
  }

  return (
    <Bar height={height} isMobile={props.isMobile}>
      {barPercent > 0 && (
        <span style={{ width: `${barPercent}%` }} />
      )}
    </Bar>
  );
}