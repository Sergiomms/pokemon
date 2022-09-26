import React from "react";
import { Col, Row } from "../../../styles/grid";
import { toLowerCaseAllLetters } from "../../../utils/masks";
import px2vw from "../../../utils/responsiviness/px2vw";
import {
  BackAndForwardPokemonButtonContainer,
  LeftAndRightButton,
  NormalText,
  SearchImg,
  SearchImgContainer,
  SearchPokeBar,
  SearchPokeButton,
} from "../styles";
import search from "../../../assets/images/search.png";
import { PokeCard } from "../../../components/PokeCard";

export function HomeMobile({ handler }) {
  return (
    <Col>
      {/* Search Bar */}
      <Row margtop={px2vw(50)}>
        <SearchPokeBar
          isMobile
          type="text"
          value={handler.pokeNumberOrName}
          onChange={(e) =>
            handler.setPokeNumberOrName(toLowerCaseAllLetters(e.target.value))
          }
        />
        <SearchPokeButton isMobile onClick={() => handler.handleGetPokemon()}>
          <SearchImgContainer isMobile>
            <SearchImg src={search} alt="magnifying glass image" />
          </SearchImgContainer>
        </SearchPokeButton>
      </Row>
      <Row>
        <NormalText isMobile>
          *Enter a number between 1 and 898 or a valid pokemon name
        </NormalText>
      </Row>
      <Row alignCenter margtop={px2vw(50)} margbottom={px2vw(20)}>
        <BackAndForwardPokemonButtonContainer 
          isMobile
          left
          onClick={() => handler.getPreviousPokemon()}
        >
          <LeftAndRightButton
            src={require('../../../assets/images/less_than.png')}
            alt="left button"
          />
        </BackAndForwardPokemonButtonContainer>
        <PokeCard handler={handler} isMobile/>
        <BackAndForwardPokemonButtonContainer
          isMobile
          right 
          onClick={() => handler.getNextPokemon()}
        >
          <LeftAndRightButton
            src={require('../../../assets/images/more_than.png')}
            alt="right button"
          />
        </BackAndForwardPokemonButtonContainer>
      </Row>
    </Col>
  );
}
