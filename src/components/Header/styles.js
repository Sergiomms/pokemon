import styled from 'styled-components';
import px2vw from '../../utils/responsiviness/px2vw';


export const PokeLogoContainer = styled.div`
  width: ${px2vw(175)};
  height: ${px2vw(100)};

  ${(props) => props.isMobile && `
    width: ${px2vw(400)};
    height: ${px2vw(225)};
  `}
`;

export const PokeLogo = styled.img`
  width: 100%;
  height: 100%;
`


