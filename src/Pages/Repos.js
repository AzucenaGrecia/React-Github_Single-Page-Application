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

const colors = {
  JavaScript: "yellow",
  HTML: "orange",
  Ruby: "red",
  Java: "white",
  Python: "green",
  PHP: "blue",
  'C#':"purple",
  CSS: "purple",
  'C++':"pink"
}

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
    padding-bottom:90px;
  }
`;

function Repos({history, location, match}) {
  const [arrCard ,setarrCard] = useState([])
  const username = match.params.username

  useEffect(()=>{
    async function getRepos (){
      const gitServices = new GithubService();
      console.log(location,"aaa")
      console.log(history)
      console.log(match)
      const dataRepo = await gitServices.repos(username)
      setarrCard(dataRepo)
    }
    getRepos();

  },[])

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
          {/* aqui iria em componnete de PAGINACIÓN */}
          {arrCard.map((card) => {
            return (
              <Card key={card.full_name} size="repo">
                <ContentLargeBold css={css`color:#2D9CDB;text-align: left;`}>{card.full_name}</ContentLargeBold>
                <div className="card_container_horizontal">
                  <ContentSmall css={css`text-align: left;`}>
                    {card.description}
                  </ContentSmall>
                </div>
                <RepoResume>
                  <div className="card_footer_section">
                    <Icon type="circle" fill={card.language?colors[card.language]:"aqua"} size={15}></Icon>
                    <ContentSmall >{card.language}</ContentSmall>
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
