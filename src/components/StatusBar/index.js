import React from "react";
import px2vw from "../../utils/responsiviness/px2vw";
import { Bar } from "./styles";

export function StatusBar(props) {

  const count = props.statusValue;
  const barPercent = count / 2;
  const height = props.height ? px2vw(props.height) : px2vw(10);

  return (
    <Bar height={height}>
      {barPercent > 0 && (
        <span style={{ width: `${barPercent}%` }} />
      )}
    </Bar>
  );
}