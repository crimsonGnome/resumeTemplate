import styled from 'styled-components';

const MainBody = styled.div`
  padding: 15px;
  max-width: 900px;
  max-height: 1440px;
  background: linear-gradient(
    180deg,
    ${props => props.theme.pink} 20.5%,
    ${props => props.theme.grey} 20.5%
  );
`;

const DualLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
`;

const SixtyForty = styled.div`
  display: grid;
  background: white;
  padding: 20px;
  grid-template-columns: 6fr 4fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;
`;

const SixtyFortyTop = styled.div`
  display: grid;
  background: white;
  grid-template-columns: 8fr 2fr;
  grid-gap: 20px;
  justify-content: center;
  justify-self: center;
  align-self: center;

  border-top: 3px solid ${props => props.theme.crimson};
  border-left: 3px solid ${props => props.theme.crimson};
  border-right: 3px solid ${props => props.theme.crimson};
  padding: 20px 20px 0 20px;

  .dev {
    position: relative;
    top: 5px;
    font-style: italic;
    margin-top: 1.5rem;
    color: ${props => props.theme.secondary};
  }
  .grid {
    display: grid;
    grid-template-columns: auto 1fr;
    justify-items: center;
    justify-content: center;
    align-items: center;
    grid-gap: 10px;
  }
`;

const ThirtySeventyBottom = styled.div`
  background: white;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 3fr 7fr;
  padding: 0 20px 10px 20px;
  border-bottom: 1px solid ${props => props.theme.crimson};
  border-left: 1px solid ${props => props.theme.crimson};
  border-right: 1px solid ${props => props.theme.crimson};
`;

export { MainBody };
export { DualLayout };
export { SixtyForty };
export { SixtyFortyTop };
export { ThirtySeventyBottom };
