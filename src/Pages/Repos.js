import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Heading2 } from "../Components/Texts/Heading";
import { Card } from "../Components/Containers/Card";
import { ContentLargeBold, ContentSmall } from "../Components/Texts/Content";
import { RepoResume } from "../Components/Containers/ReṕoResume";
import Icon from "../Components/UI/icon";
import Navbar from "../Components/Containers/Navbar";
import { useEffect, useState } from "react";
import GithubService from "../services/github_service";
import { Link } from "react-router-dom";
import Pagination from "../Components/Containers/Pagination";

const colors = {
  JavaScript: "yellow",
  HTML: "orange",
  Ruby: "red",
  Java: "white",
  Python: "green",
  PHP: "blue",
  "C#": "purple",
  CSS: "purple",
  "C++": "pink",
};

const StyleA = styled.a`
  text-decoration: none;
`;

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
    padding-bottom: 90px;
  }
`;

function getPage(location) {
  if (location.search == "") {
    return 1;
  }
  const value = parseInt(location.search.split("=")[1]);
  return value;
}

function getPath(location) {
  const value = location.pathname.split("/").slice(-1).join();
  return value;
}

function Repos({ history, location, match }) {
  const [arrCard, setarrCard] = useState([]);
  const username = match.params.username;
  const limit = 6;
  const totalPages = Math.ceil(arrCard.length / limit);
  const currentPage = getPage(location);
  const path = getPath(location);

  useEffect(() => {
    async function getRepos() {
      const gitServices = new GithubService();
      console.log(location, "aaa");
      console.log(history);
      console.log(match);
      const dataRepo = await gitServices.repos(username);
      setarrCard(dataRepo);
    }
    getRepos();
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
          Repos({arrCard.length})
        </Heading2>

        <div className="container_cards">
          <Pagination pages={totalPages} path={path} />
          {arrCard
            .slice((currentPage - 1) * limit, currentPage * limit)
            .map((card) => {
              return (
                <Card key={card.full_name} size="repo">
                  <StyleA href={card.html_url} target="_blank">
                    <ContentLargeBold
                      css={css`
                        color: #2d9cdb;
                        text-align: left;
                      `}
                    >
                      {card.full_name}
                    </ContentLargeBold>
                  </StyleA>
                  <div className="card_container_horizontal">
                    <ContentSmall
                      css={css`
                        text-align: left;
                      `}
                    >
                      {card.description}
                    </ContentSmall>
                  </div>
                  <RepoResume>
                    <div className="card_footer_section">
                      <Icon
                        type="circle"
                        fill={card.language ? colors[card.language] : "aqua"}
                        size={15}
                      ></Icon>
                      <ContentSmall>{card.language}</ContentSmall>
                    </div>

                    <div className="card_footer_section">
                      <Icon type="starLine" fill="#03053D" size={15}></Icon>
                      <ContentSmall>{card.stargazers_count}</ContentSmall>
                    </div>

                    <div className="card_footer_section">
                      <Icon type="fork" fill="#03053D" size={15}></Icon>
                      <ContentSmall>{card.forks}</ContentSmall>
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
