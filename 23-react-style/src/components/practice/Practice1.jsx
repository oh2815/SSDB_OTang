import styled, { keyframes } from "styled-components";
import logo from "./logo.svg";

const StyledContainer = styled.div``;
const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
const rotate = keyframes`
      0%{
          transform: rotate(0);
      }

      100%{
          transform: rotate(360deg)
      }
  `;
const ReactLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} 20s linear infinite;
`;
const ReactLink = styled.a`
  color: yellowgreen;
`;

export default function Practice1() {
  return (
    <div>
      <StyledHeader>
        <ReactLogo src={logo} alt="app" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ReactLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </ReactLink>
      </StyledHeader>
    </div>
  );
}
