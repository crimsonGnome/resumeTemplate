import styled from 'styled-components';

const Education = styled.div`
  background: ${props => props.theme.pink};
  justify-content: center;
  justify-items: center;
  text-align: left;
  font-weight: 600;
  padding: 10px 20px 10px 20px;

  h4 {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 10px;
    align-items: center;
  }

  h4:before,
  h4:after {
    display: block;
    content: '';
    height: 1px;
    background: linear-gradient(
      to var(--direction, left),
      ${props => props.theme.crimson},
      transparent
    );
  }

  h4:after {
    --direction: right;
  }
  .title {
  }
`;

const DarkEducation = styled.div`
  background: #2f2e36;
  color: #fcfcfc;
  justify-content: center;
  justify-items: center;
  text-align: left;
  font-weight: 600;
`;

const DualList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  justify-items: left;
  align-items: center;
  justify-self: center;
  align-self: center;
  text-decoration: none;
  padding: 0;
  list-style-type: none;
  font-weight: 200;
  padding: 0 20px;
`;

export default Education;
export { DualList };
export { DarkEducation };
