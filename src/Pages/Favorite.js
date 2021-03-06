import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Heading2 } from "../Components/Texts/Heading";
import { Card } from "../Components/Containers/Card";
import Icon from "../Components/UI/icon";
import { Content, ContentSmall } from "../Components/Texts/Content";
import Avatar from "../Components/UI/avatar";
import { toggleFavorite } from "../helpers/favorites";
import { useEffect, useState } from "react";
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

function Favorite() {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <StyledDiv>
        <Heading2
          styled={css`
            margin-bottom: 20px;
            text-align: inherit;
          `}
        >
          Favorites({favorites.length})
        </Heading2>

        <div className="container_cards">
          {/* aqui iria em componnete de PAGINACIÓN */}
          {favorites.map((card) => {
            return (
              <Card size="favorites">
                <Avatar src={card.avatar_url} placeholder="R" size="small" />
                <div className="card_container_horizontal">
                  <Content>{card.name}</Content>
                  <ContentSmall>{card.login}</ContentSmall>
                </div>
                <Icon
                  onClick={() => toggleFavorite(favorites, card, setFavorites)}
                  type="star"
                  fill="#F2C94C"
                  size={25}
                ></Icon>
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
      ></Navbar>
    </>
  );
}

export { Favorite };
