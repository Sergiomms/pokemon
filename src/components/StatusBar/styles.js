import styled from "styled-components";
import { pokeGray2, pokeGreen } from "../../styles/colors";
import px2vw from "../../utils/responsiviness/px2vw";

export const Bar = styled.div`
  width: 100%;
  background-color: ${pokeGray2};
  border-radius: ${px2vw(15)};

  ${(props) => `
    height: ${props.height || px2vw(7)};
  `};

  span {
    display: block;
    height: 100%;
    background-color: ${pokeGreen};
    border-radius: 15px;
    box-shadow: inset 0 2px 9px ${pokeGreen}, inset 0 -2px 6px ${pokeGreen};
    overflow: hidden;
    padding: ${px2vw(3)};
    transition: all 0.2s ease;
  }

  ${(props) => props.isMobile && `
    height: ${px2vw(30)};
  `}
`;

// will serve for future consultations
// export const StatusBar_Back = styled.div`
//   width: 100%;
//   .progress-bar {
//     --progress: 50;
//     height: ${px2vw(25)};
//     padding: ${px2vw(5)};
//     background-color: #ccc;
//     display: flex;
//   }

//   .progress-bar::before{
//     content: "";
//     width: calc(var(--progress) * 1%);
//     background-color: hsl( calc(var(--progress) * 1.2) , 80%, 50%);
//     transition: all 0.2s ease;
//   }
// `;
