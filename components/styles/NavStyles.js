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
      width: 90%;
      position: absolute;
      left: 5%;
      z-index: -1;
      background: #ea6d07;
      transform: rotate(-2deg);
      transform-origin: center;
      transition: height 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.5);
      box-shadow: 0 7px 5px -6px rgba(0, 0, 0, 0.5);
    }
    &:hover,
    &:focus {
      outline: none;
      color: #fff;
      &:before {
        height: 50%;
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
      &:before {
        width: 100%;
        left: 0;
      }
      &:hover,
      &:focus {
        &:before {
          height: 70%;
        }
      }
    }
  }

  @media (max-width: 700px) {
    a,
    button {
      font-size: 1.2rem;
      padding: 1rem;
    }
  }
`

export default NavStyles
