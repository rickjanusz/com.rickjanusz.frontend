import styled from 'styled-components'

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    transition: color 0.4s;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    &:before {
      content: '';
      height: 0;
      margin-top: 2.5rem;
      width: 100%;
      position: absolute;
      left: 0;
      z-index: -1;
      background: #ea6d07;
      transform: translateY(-50%) rotate(-3deg);
      transition: height 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
    }
    &:hover,
    &:focus {
      outline: none;
      color: #fff;
      &:before {
        height: 60%;
        margin-top: 0;
        width: 100%;
        transform: translateY(0%) rotate(-3deg);
        height: calc(80% - 50px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1px solid ${(props) => props.theme.lightgrey};
    width: 100%;
    justify-content: center;
    a,
    button {
      font-size: 1.5rem;
      &:hover,
      &:focus {
        &:before {
          height: 60%;
          margin-top: 0;
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 700px) {
    a,
    button {
      font-size: 1.2rem;
      padding: 1rem;
      &:hover,
      &:focus {
        &:before {
        }
      }
    }
  }
`

export default NavStyles
