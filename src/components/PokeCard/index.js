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

export function PokeCard({ handler }) {
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
    <Card>
      <Row justifyStart spaceBetween height="auto" margbottom={px2vw(10)}>
        <Col width="auto" height="auto">
          <PokeName>{handler.pokeName}</PokeName>
        </Col>
        <Col width="auto" height="auto">
          <PokeNumber>
            Nº - <span>{handler.pokeId}</span>
          </PokeNumber>
        </Col>
      </Row>
      <PokeView>
        <BackgroundImage>
          {handler.loadingPokemon ? (
            <LoadingBox>
              <Spinner />
            </LoadingBox>
          ) : (
            <PokemonImageContainer>
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
            width={px2vw(400)}
            margtop={px2vw(15)}
            margleft={px2vw(15)}
          >
            {pokeStatus.map((stats, idx) => {
              return (
                <Col key={idx}>
                  <Row justifyStart>
                    <StatsName>{stats.stat.name.toUpperCase()} - {stats.base_stat}</StatsName>
                  </Row>
                  <Row justifyStart height={px2vw(25)} width={px2vw(175)}>
                    <StatusBar statusValue={stats.base_stat}/>
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
