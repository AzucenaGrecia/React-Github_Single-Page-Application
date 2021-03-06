import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Heading2 } from "../Components/Texts/Heading";
import { Card } from "../Components/Containers/Card";
import { Content } from "../Components/Texts/Content";
import Avatar from "../Components/UI/avatar";
import Navbar from "../Components/Containers/Navbar";
import { useEffect, useState } from "react";
import GithubService from "../services/github_service";
import Pagination from "../Components/Containers/Pagination";

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

function getUsernameLocation(location) {
  const value = location.pathname.split("/")[2];
  return value || "";
}

function getPage(location) {
  if (location.search==""){
    return 1;
  }
  const value = parseInt(location.search.split("=")[1]);
  return value;
}

function Followers({ history, location }) {
  const [data, setData] = useState([]);
  const query = getUsernameLocation(location);
  const limit = 6;
  const totalPages = Math.ceil(data.length / limit);
  const currentPage = getPage(location);
 

  useEffect(() => {
    async function fetchFollowers() {
      const gs = new GithubService();
      const response = await gs.followers(query);
      setData(response);
    }
    fetchFollowers();
  }, []);

  return (
    <>
      <StyledDiv>
        <Heading2
          styled={css`
            margin-bottom: 20px;
            text-align: inherit;
          `}
        >
          Followers ({data.length})
        </Heading2>

        <div className="container_cards">
          <Pagination pages={totalPages} />
          {data
            .slice((currentPage - 1) * limit, currentPage * limit)
            .map((card) => {
              return (
                <Card key={card.login} size="favorites">
                  <Avatar
                    src={card.avatar_url || ""}
                    placeholder="R"
                    size="small"
                    onClick={() => history.push(`/search?user=${card.login}`)}
                  ></Avatar>
                  <div className="card_container_horizontal">
                    <Content>{card.login || ""}</Content>
                  </div>
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

export { Followers };
