import React from "react";
import { pokeRed3 } from "../../../styles/colors";
import { Col, Row } from "../../../styles/grid";
import px2vw from "../../../utils/responsiviness/px2vw";
import { PokeLogo, PokeLogoContainer } from "../styles";

export function HeaderWeb({ handler }) {  

  return (
    <Row height={px2vw(75)} background={pokeRed3} alignCenter>
      <Col alignCenter>
        <PokeLogoContainer>
          <PokeLogo src={require("../../../assets/images/Pokemon-Logo.png")} />
        </PokeLogoContainer>
      </Col>

      {/* <Col onClick={() => handler.handleNavigation("home")} cursor="pointer">Home</Col>
      <Col onClick={() => handler.handleNavigation("teste")} cursor="pointer">Teste</Col> */}
    </Row>
  );
}
