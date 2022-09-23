import styled from 'styled-components';

const Default = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  height: 100%;

  /* ****** BACKGROUND ****** */
  ${(props) => props.background && `background: ${props.background};`};

   /* ****** BORDER ****** */
  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius};`};
  border-bottom: ${(props) => props.borderbottom};
  border-top: ${(props) => props.bordertop};
  border: ${(props) => props.border};

  /* ****** CURSOR ****** */
  cursor: ${(props) => props.cursor};

  /* ****** MARGIN ****** */
  margin: ${(props) => props.marg};
  margin-top: ${(props) => props.margtop};
  margin-bottom: ${(props) => props.margbottom};
  margin-left: ${(props) => props.margleft};
  margin-right: ${(props) => props.margright};

  /* ****** PADDING ****** */
  padding: ${(props) => props.pad};
  padding-top: ${(props) => props.padtop};
  padding-bottom: ${(props) => props.padbottom};
  padding-left: ${(props) => props.padleft};
  padding-right: ${(props) => props.padright};

  /* ****** WIDTH ****** */
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxwidth};
  min-width: ${(props) => props.minwidth};

  /* ****** HEIGHT ****** */
  height: ${(props) => props.height};
  max-height: ${(props) => props.maxheight};
  min-height: ${(props) => props.minheight};

  /* ****** NOWRAP ****** */
  ${(props) => props.noWrap && `flex-wrap: nowrap;`};

  /* ****** LEFT ****** */
  ${(props) => props.alignStart && `align-items: flex-start;`};
  ${(props) => props.justifyStart && `justify-content: flex-start;`};

  /* ****** CENTER ****** */
  ${(props) => props.alignCenter && `align-items: center;`};
  ${(props) => props.justifyCenter && `justify-content: center;`};

  /* ****** RIGHT ****** */
  ${(props) => props.alignEnd && `align-items: flex-end;`};
  ${(props) => props.justifyEnd && `justify-content: flex-end;`};

  /* ****** SPACE BETWEEN ****** */
  ${(props) => props.spaceBetween && `justify-content: space-between;`};

  /* ****** SPACE AROUND ****** */
  ${(props) => props.spaceAround && `justify-content: space-around;`};

  /* ****** OPACITY ****** */
  opacity: ${(props) => props.opacity};

  .ml-auto {
    margin-left: auto;
  }
  .mr-auto {
    margin-right: auto;
  }
  .mt-auto {
    margin-top: auto;
  }
  .mb-auto {
    margin-bottom: auto;
  }

`;

export const Row = styled(Default)`
  flex-direction: row;
`;

export const Col = styled(Default)`
  flex-direction: column;
`;