import React from "react";
import { HeaderMobile } from "./Mobile";
import { HeaderWeb } from "./Web";
import RealTimeDimensions from "../../utils/responsiviness/RealTimeDimensions"


export function Header() {
  const [width] = RealTimeDimensions();
  const isWeb = width >= 800 ? true : false;

  if (isWeb) {
    return <HeaderWeb/>
  } else {
    return <HeaderMobile/>
  }
}
