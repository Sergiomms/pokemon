import React from "react";
import { HomeMobile } from "./Mobile";
import { HomeWeb } from "./Web";
import RealTimeDimensions from "../../utils/responsiviness/RealTimeDimensions"


export function Home({ handler }) {
  const [width] = RealTimeDimensions();
  const isWeb = width >= 800 ? true : false;

  if (isWeb) {
    return <HomeWeb handler={handler}/>
  } else {
    return <HomeMobile/>
  }
}