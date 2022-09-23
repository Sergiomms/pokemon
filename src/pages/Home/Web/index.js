import React from "react";
import { PokeCard } from "../../../components/PokeCard";
import { Col, Row } from "../../../styles/grid";
import px2vw from "../../../utils/responsiviness/px2vw";
import { NormalText, SearchImg, SearchImgContainer, SearchPokeBar, SearchPokeButton } from "../styles";
import search from "../../../assets/images/search.png";
import { toLowerCaseAllLetters } from "../../../utils/masks";
import { pokeBlack } from "../../../styles/colors";
import { StatusBar } from "../../../components/StatusBar";

export function HomeWeb({ handler }) {
  return (
    <Col>
      <Row margtop={px2vw(20)}>
        <SearchPokeBar
          type="text"
          value={handler.pokeNumberOrName}
          onChange={(e) => handler.setPokeNumberOrName(toLowerCaseAllLetters(e.target.value))}
        />
        <SearchPokeButton
          onClick={() => handler.handleGetPokemon()}
        >
          <SearchImgContainer>
            <SearchImg
              src={search}
              alt="magnifying glass image"
            />
          </SearchImgContainer>
        </SearchPokeButton>
      </Row>
      <Row>
        <NormalText>
          *Enter a number between 1 and 898 or a valid pokemon name
        </NormalText>
      </Row>
      <Row alignCenter margtop={px2vw(20)} margbottom={px2vw(20)}>
        <PokeCard handler={handler}/>
      </Row>
    </Col>
  );
}
