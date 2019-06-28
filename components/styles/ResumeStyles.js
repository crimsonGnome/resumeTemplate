import styled from 'styled-components';

const ImgContainer = styled.div`
  height: 100px;
  width: 100px;
  clip-path: polygon(50% 0%, 92% 62%, 74% 100%, 26% 100%, 8% 62%);
  background: ${props => props.theme.crimson};
  position: relative;
  z-index: 4;
`;

const Logo = styled.img`
  position: relative;
  height: 125px;
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
  }
  img {
    height: 15px;
  }
  li {
    display: grid;
    grid-template-columns: 15px 1fr;
    grid-gap: 5px;
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
  padding: 0 20px;
  text-align: left;
  h3,
  h4 {
    margin-top: 0;
  }
  label {
    font-style: italic;
    padding-left: 10px;
  }
  ul {
    padding-left: 20px;
  }
  p {
    padding-left: 20px;
    margin: 0.5rem 0;
  }
  .title {
    font-size: 1.6rem;
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
`;
export { ImgContainer };
export { Logo };
export { WhiteBackground };
export { Border };
export { LeftColumn };
export { ResumeFormatDark };
export { ResumeFormat };
export { WhiteBackground2 };
