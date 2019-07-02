import styled from 'styled-components';

const ImgContainer = styled.div`
  height: 75px;
  width: 75px;
  clip-path: polygon(50% 0%, 92% 62%, 74% 100%, 26% 100%, 8% 62%);
  background: ${props => props.theme.crimson};
  position: relative;
  z-index: 4;
`;

const Logo = styled.img`
  position: relative;
  height: 100px;
  right: 15px;
`;

const WhiteBackground = styled.div`
  padding: 10px 10px 10px 10px;
  background: white;
`;
const WhiteBackground2 = styled.div`
  padding: 10px 10px 10px 10px;
  background: white;
  border-left: 3px solid ${props => props.theme.crimson};
  border-right: 3px solid ${props => props.theme.crimson};
`;

const Border = styled.div`
  border: 1px solid ${props => props.theme.crimson};
  background: ${props => props.theme.crimson};
`;

const LeftColumn = styled.div`
  background: ${props => props.theme.secondary};
  width: 100%;
`;

const ResumeFormatDark = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
  text-align: left;

  .marginPaddingSame {
    margin-top: 0;
    padding-top: 15px;
  }
  h3,
  h4 {
    margin-top: 0;
  }
  label {
    display: block;
    font-style: italic;
    padding-left: 10px;
    font-size: 1rem;
  }
  ul {
    padding-left: 10px;
    font-weight: 300;
    list-style-type: none;
    padding: 10px;
    margin: 0;
  }
  .last {
    padding-bottom: 0px;
  }
  img {
    height: 15px;
  }
  li {
    display: grid;
    grid-template-columns: 15px 1fr;
    grid-gap: 10px;
    margin: 10px 0;
  }

  h3 {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 10px;
    align-items: center;
  }

  h3:before,
  h3:after {
    display: block;
    content: '';
    height: 1px;
    background: linear-gradient(
      to var(--direction, left),
      ${props => props.theme.crimson},
      transparent
    );
  }

  h3:after {
    --direction: right;
  }
  .title {
  }
`;

const ResumeFormat = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 0 10px;
  text-align: left;
  li {
    padding: 5px;
  }
  h3,
  h4 {
    margin-top: 0;
  }
  label {
    font-style: italic;
  }
  ul {
    padding-left: 20px;
  }
  .title {
    font-size: 1.6rem;
    font-weight: 600;
  }
  .role {
    font-style: italic;
    color: ${props => props.theme.crimson};
  }
  h2 {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 20px;
    align-items: center;
  }

  h2:before,
  h2:after {
    display: block;
    content: '';
    height: 2px;
    background: linear-gradient(
      to var(--direction, left),
      ${props => props.theme.crimson},
      transparent
    );
  }

  h2:after {
    --direction: right;
  }
  .margin-top {
    margin-top: 0;
  }
`;

const SeventyThirtyResumeLogo = styled.div`
  display: grid;
  background: white;
  grid-template-columns: 7fr 3fr;
  grid-gap: 20px;
  padding: 0;
`;

export { ImgContainer };
export { Logo };
export { WhiteBackground };
export { Border };
export { LeftColumn };
export { ResumeFormatDark };
export { ResumeFormat };
export { WhiteBackground2 };
export { SeventyThirtyResumeLogo };
