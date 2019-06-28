import styled from 'styled-components';

const Contact = styled.section`
  border-top: 2px solid ${props => props.theme.crimson};
  border-bottom: 2px solid ${props => props.theme.crimson};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  font-size: 1.2rem;
  margin: 5px 10px 0 10px;
  text-align: center;

  .feature {
    position: relative;
    padding: 20px 0;
    font-weight: 300;
  }
  .left-border {
    border-right: solid 2px ${props => props.theme.crimson};
  }
  a {
    color: ${props => props.theme.crimson};
  }
  i {
    position: absolute;
    top: -30px;
    left: calc(50% - 22.5px);
    align-self: center;
    border-radius: 100%;
    background: ${props => props.theme.crimson};
    color: white;
    font-size: 2.5rem;
    padding: 1rem;
    z-index: 3;
  }
`;

export default Contact;
