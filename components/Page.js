import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Meta from './Meta';

const theme = {
  maxWidth: '900px',
  bs:
    '0 8px 17px 2px rgba(0,0,0,0.14),0 3px 14px 2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.2)',
  tabletView: 'max-width: 1015px',
  phoneView: 'max-width: 600px',
  crimson: '#b20601',
  pink: '#b2060150',
  third: '#fcfcfc',
  grey: '#c7c7c7',
  black: '#393939'
};
const StyledPage = styled.div`
  background: white;
`;
// injectGlobal`
//   html {
//     box-sizing: border-box;
//     font-size: 10px;
//   }
//   *, *:before, *:after {
//     box-sizing: inherit;
//   }
//   body {
//     padding: 0;
//     margin: 0;
//     background: #fcfcfc;
//     font-size: 1.6rem;
//   }
//   .crimson{
//     color: #b20601;
//   }
//   a {
//     text-decoration: none;
//     color: ${theme.black};
//   }
// `;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          {this.props.children}
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
