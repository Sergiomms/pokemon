import React from "react";
import { pokeRed3 } from "../../../styles/colors";
import { Row } from "../../../styles/grid";
import px2vw from "../../../utils/responsiviness/px2vw";
import { PokeLogo, PokeLogoContainer } from "../styles";

export function HeaderWeb() {
  return (
    <Row height={px2vw(75)} background={pokeRed3} alignCenter>
      <PokeLogoContainer>
        <PokeLogo src={require("../../../assets/images/Pokemon-Logo.png")} />
      </PokeLogoContainer>
    </Row>
  );
}
