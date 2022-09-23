import React from "react";
import { pokeRed3 } from "../../../styles/colors";
import { Row } from "../../../styles/grid";
import px2vw from "../../../utils/responsiviness/px2vw";
import { PokeLogo, PokeLogoContainer } from "../styles";


export function HeaderMobile() {
  return (
    <Row height={px2vw(200)} background={pokeRed3} alignCenter>
      <PokeLogoContainer isMobile>
        <PokeLogo
          src={require('../../../assets/images/Pokemon-Logo.png')}
        />
      </PokeLogoContainer>
    </Row>
  )
};