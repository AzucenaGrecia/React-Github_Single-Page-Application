import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Heading2 } from "../Components/Texts/Heading";
import { Card } from "../Components/Containers/Card";
import { ContentLargeBold, ContentSmall } from "../Components/Texts/Content";
import { RepoResume } from "../Components/Containers/ReṕoResume";
import Icon from "../Components/UI/icon";
import Navbar from "../Components/Containers/Navbar";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 12px 36px;
  & .container_cards {
    display: grid;
    width: 100%;
    grid-template-columns: 1fr;
    grid-gap: 16px;
    justify-items: center;
  }
`;

function Repos() {
  let arrCard = [1, 2, 3, 4, 5];

  return (
    <>
      <StyledDiv>
        <Heading2
          styled={css`
            margin-bottom: 20px;
            text-align: inherit;
          `}
        >
          Repos(5)
        </Heading2>

        <div className="container_cards">
          {/* aqui iria em componnete de PAGINACIÓN */}
          {arrCard.map((card) => {
            return (
              <Card size="repo">
                <ContentLargeBold>gaearon/6to5</ContentLargeBold>
                <div className="card_container_horizontal">
                  <ContentSmall>
                    Turn ES6+ code into readable vanilla ES5 with source maps
                    and more!
                  </ContentSmall>
                </div>
                <RepoResume>
                  <div className="card_footer_section">
                    <Icon type="circle" fill="#F2C94C" size={15}></Icon>
                    <ContentSmall>JavaScript</ContentSmall>
                  </div>

                  <div className="card_footer_section">
                    <Icon type="starLine" fill="#03053D" size={15}></Icon>
                    <ContentSmall>2</ContentSmall>
                  </div>

                  <div className="card_footer_section">
                    <Icon type="fork" fill="#03053D" size={15}></Icon>
                    <ContentSmall>3</ContentSmall>
                  </div>
                </RepoResume>
              </Card>
            );
          })}
        </div>
      </StyledDiv>

      <Navbar
        css={css`
          position: fixed;
          bottom: 0;
          width: 100%;
        `}
      />
    </>
  );
}

export { Repos };
