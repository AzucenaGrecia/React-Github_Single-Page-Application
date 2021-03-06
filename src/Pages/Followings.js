import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Heading2 } from "../Components/Texts/Heading";
import { Card } from "../Components/Containers/Card";
import { Content } from "../Components/Texts/Content";
import Avatar from "../Components/UI/avatar";

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

function Followings() {
  let arrCard = [
    1,
    2,
    3,
    4,
    1,
    1,
    1,
    1,
    1,
    1,
    11,
    1,
    1,
    1,
    11,
    1,
    1,
    1,
    1,
    1,
    1,
  ];

  return (
    <StyledDiv>
      <Heading2
        styled={css`
          margin-bottom: 20px;
          text-align: inherit;
        `}
      >
        Followings(106)
      </Heading2>

      <div className="container_cards">
        {/* aqui iria em componnete de PAGINACIÓN */}
        {arrCard.map((card) => {
          return (
            <Card size="favorites">
              <Avatar src="" placeholder="R" size="small"></Avatar>
              <div className="card_container_horizontal">
                <Content>LazyBwoy</Content>
              </div>
            </Card>
          );
        })}
      </div>
    </StyledDiv>
  );
}

export { Followings };
