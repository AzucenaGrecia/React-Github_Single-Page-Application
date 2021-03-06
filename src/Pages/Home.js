import { Heading1 } from "../Components/Texts/Heading";
import gh from "../assets/image1.png";
import Button from "../Components/UI/button";
import Navbar from "../Components/Containers/Navbar";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

function Home() {
  const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 60px;
  `;

  return (
    <StyledDiv>
      <Heading1
        style={css`
          width: 264px;
        `}
      >
        Welcome to Github Users
      </Heading1>
      <img src={gh} />
      <Button>Continue</Button>
      <Navbar
        css={css`
          position: fixed;
          bottom: 0;
          width: 100%;
        `}
      />
    </StyledDiv>
  );
}

export { Home };
