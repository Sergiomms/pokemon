import React, { useEffect, useState } from "react";
import { Col, Row } from "../../styles/grid";
import px2vw from "../../utils/responsiviness/px2vw";
import {
  Card,
  PokeNumber,
  PokeName,
  PokeView,
  BackgroundImage,
  PokemonImageContainer,
  PokemonImage,
  LoadingBox,
  StatsName,
} from "./styles";

import Spinner from "../../components/Spinner";
import { StatusBar } from "../StatusBar";

export function PokeCard({ handler, isMobile }) {
  const [totalStatsPerLine, setTotalStatsPerLine] = useState([]);

  useEffect(() => {
    if (handler.pokeStats) {
      // Separate the pokeStats into 2 columns of 3 stats
      setTotalStatsPerLine(
        handler.pokeStats.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / 2);

          if (!resultArray[chunkIndex]) {
            // eslint-disable-next-line no-param-reassign
            resultArray[chunkIndex] = [];
          }

          resultArray[chunkIndex].push(item);

          return resultArray;
        }, [])
      );
    }
  }, [handler.pokeStats]);

  return (
    <Card isMobile={isMobile}>
      <Row
        justifyStart
        spaceBetween
        height="auto"
        margbottom={isMobile ? px2vw(20) : px2vw(10)}
      >
        <Col width="auto" height="auto">
          <PokeName isMobile={isMobile}>{handler.pokeName}</PokeName>
        </Col>
        <Col width="auto" height="auto">
          <PokeNumber isMobile={isMobile}>
            Nº - <span>{handler.pokeId}</span>
          </PokeNumber>
        </Col>
      </Row>
      <PokeView isMobile={isMobile}>
        <BackgroundImage isMobile={isMobile}>
          {handler.loadingPokemon ? (
            <LoadingBox isMobile={isMobile}>
              <Spinner />
            </LoadingBox>
          ) : (
            <PokemonImageContainer isMobile={isMobile}>
              <PokemonImage src={handler.pokeImgFront} />
            </PokemonImageContainer>
          )}
        </BackgroundImage>
      </PokeView>

      {totalStatsPerLine.map((pokeStatus, idxGroup) => {
        return (
          <Row
            key={idxGroup}
            justifyCenter
            spaceBetween
            width={isMobile ? px2vw(900) : px2vw(400)}
            margtop={isMobile ? px2vw(40) : px2vw(15)}
            margleft={px2vw(15)}
          >
            {pokeStatus.map((stats, idx) => {
              return (
                <Col key={idx}>
                  <Row justifyStart height="auto">  
                    <StatsName isMobile={isMobile}>
                      {stats.stat.name.toUpperCase()} - {stats.base_stat}
                    </StatsName>
                  </Row>
                  <Row
                    justifyStart
                    height={isMobile ? px2vw(25) : px2vw(25)}
                    width={isMobile ? px2vw(400) : px2vw(175)}
                    margtop={isMobile ? px2vw(25) : px2vw(5)}
                  >
                    <StatusBar statusValue={stats.base_stat} isMobile={isMobile} />
                  </Row>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Card>
  );
}
