import styled from 'styled-components';

const Title = styled.h3`
  display: grid;
  @font-face {
    font-family: 'Trajan';
    src: url('/static/TrajanPro-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Trajan';
  text-align: left;
  align-self: left;
  font-size: 4.5rem;
  margin: 0;
  font-weight: 900;

  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  color: #b20601;
  hr {
    color: #b20601;
  }
`;
const BigTitle = styled.h3`
  display: grid;
  @font-face {
    font-family: 'Trajan';
    src: url('/static/TrajanPro-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'Trajan';
  text-align: center;
  align-self: center;
  font-size: 6rem;
  margin: 0;
  font-weight: 900;

  text-shadow: 2px 2px rgba(0, 0, 0, 0.2);
  color: #b20601;
  hr {
    color: #b20601;
  }
`;

const ImgTitle = styled.h3``;

export default Title;
export { BigTitle };
