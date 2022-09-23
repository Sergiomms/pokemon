import styled from 'styled-components';
import px2vw from '../../utils/responsiviness/px2vw';
import { pokeBlue2, pokeYellow2 } from '../../styles/colors';

export const SearchPokeBar = styled.input`
  border: ${px2vw(4)} solid ${pokeBlue2};
  border-radius: ${px2vw(30)} ${px2vw(0)} ${px2vw(0)} ${px2vw(30)};
  width: ${px2vw(300)};
  height: ${px2vw(35)};
  padding-left: ${px2vw(10)};
`; 

export const SearchPokeButton = styled.button`
  border: none;
  border-radius: ${px2vw(0)} ${px2vw(30)} ${px2vw(30)} ${px2vw(0)};
  width: ${px2vw(75)};
  height: ${px2vw(35)};
  background: ${pokeYellow2};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SearchImgContainer = styled.div`
  width: ${px2vw(25)};
  height: ${px2vw(20)};
`;

export const SearchImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const NormalText = styled.div`
  font-size: ${px2vw(11)};
  text-align: start;
`;

export const BackAndForwardPokemonButtonContainer = styled.div`

  width: ${px2vw(70)};
  height: ${px2vw(70)};
  border-radius: ${px2vw(99)};
  border: ${px2vw(5)} solid ${pokeYellow2};
  background: ${pokeBlue2};
  cursor: pointer;

  ${(props) => props.left && `
    margin-right: ${px2vw(10)};
  `};

${(props) => props.right && `
    margin-left: ${px2vw(10)};
  `};

`;

export const LeftAndRightButton = styled.img`
  width: 100%;
  height: 100%;
`;