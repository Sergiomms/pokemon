import React from "react";
import { HeaderMobile } from "./Mobile";
import { HeaderWeb } from "./Web";
import RealTimeDimensions from "../../utils/responsiviness/RealTimeDimensions"
import { useNavigate } from "react-router-dom";
import { home, teste } from "../../routes/routeMap";


export function Header() {
  const [width] = RealTimeDimensions();
  const isWeb = width >= 800 ? true : false;

  const navigate = useNavigate();

  function handleNavigation(goTo){
    if(goTo === "home"){
      navigate(home)
    } else if(goTo === "teste"){
      navigate(teste)
    }
  };

  const handler = {
    handleNavigation: (e) => handleNavigation(e),
  };

  if (isWeb) {
    return <HeaderWeb handler={handler}/>
  } else {
    return <HeaderMobile/>
  }
}
