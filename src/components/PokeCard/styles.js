import styled from "styled-components";
import px2vw from "../../utils/responsiviness/px2vw";
import { pokeYellow2, pokeBlue2, pokeGray, pokeGreen } from "../../styles/colors";
import pokemonBackground from "../../assets/images/pokemon_background.png";

export const Card = styled.div`
  width: ${px2vw(450)};
  height: ${px2vw(500)};
  padding: ${px2vw(15)};
  border-radius: ${px2vw(30)};
  border: ${px2vw(15)} solid ${pokeYellow2};
  background: ${pokeBlue2};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PokeName = styled.div`
  width: auto;
  height: auto;
  font-size: ${px2vw(17)};
  text-align: start;
  font-weight: bold;
`;

export const PokeNumber = styled.div`
  width: auto;
  height: auto;
  font-size: ${px2vw(12)};
  text-align: start;
  font-weight: bold;

  span {
    font-size: ${px2vw(20)};
    text-align: start;
    font-weight: bold;
    display: inline-block;
  }
`;

export const PokeView = styled.div`
  width: ${px2vw(400)};
  height: ${px2vw(225)};
  border: ${px2vw(5)} solid ${pokeGray};
`;

export const BackgroundImage = styled.div`
  width: ${px2vw(390)};
  height: ${px2vw(215)};
  background-image: url(${pokemonBackground});
  background-size: ${px2vw(390)} ${px2vw(215)};
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: start;
`;

export const PokemonImageContainer = styled.div`
  width: ${px2vw(150)};
  height: ${px2vw(150)};
  margin-left: ${px2vw(30)};
`;

export const PokemonImage = styled.img`
  width: 100%;
  height: 100%;

  /* Use this to the "Quem é esse pokemon" page */
  /* filter: brightness(0%); */
`;

export const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: ${px2vw(80)};
  margin-top: ${px2vw(-40)};
`;

export const StatsName = styled.div`
  font-size: ${px2vw(14)};
  font-weight: bold;
`;

export const StatusBar = styled.div`
  width: 100%;

  .hpStatusClass {
    progress: ${(props) => props.progress};
    height: ${px2vw(25)};
    padding: ${px2vw(5)};
    background-color: #ccc;
    display: flex;
  }

  .hpStatusClass::before {
    content: "";
    width: calc(var(--progress) * 1%);
    background-color: hsl(calc(progress * 1.2), 80%, 50%);
    transition: all 0.2s ease;
  }
`;


