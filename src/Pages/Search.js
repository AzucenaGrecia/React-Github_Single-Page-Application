import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Navbar from "../Components/Containers/Navbar";
import Input from "../Components/Forms/Input";
import Icon from "../Components/UI/icon";
import { Content, ContentLargeBold } from "../Components/Texts/Content";
import Avatar from "../Components/UI/avatar";
import { Card } from "../Components/Containers/Card";
import { Heading2 } from "../Components/Texts/Heading";
import GithubService from "../services/github_service";
/* import { getFavorite, toggleFavorite } from "../helpers/favorites"; */

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  gap: 60px;
  & > .results {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    & > .username {
      display: flex;
      gap: 4px;
    }
    & > .follow-container {
      display: flex;
      gap: 16px;
      & > .follow-container-content {
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
    }
  }
`;

function getLocationQuery(location) {
  const values = location.search.slice(1);
  const [_, value] = values.split("=");
  return value || "";
}

function Search({ history, location }) {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(getLocationQuery(location));
  let [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    async function fetchUser() {
      const gs = new GithubService();
      setLoading(true);
      setData(await gs.profile(query));
      history.push(`/search?user=${query}`);
      setLoading(false);
    }

    let timerID;

    if (query !== "") {
      timerID = setTimeout(fetchUser, 1000);
    }

    return () => clearTimeout(timerID);
  }, [query]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const NoData = () => (
    <>
      <Icon type="github" size={120} />
      <ContentLargeBold>
        {loading ? "Retrieving user..." : "No users..."}
      </ContentLargeBold>
    </>
  );

  const ProfileView = () => (
    <>
      <Avatar src={data.avatar_url} placeholder={"NU"} />
      <div className="username">
        <ContentLargeBold>{data.name}</ContentLargeBold>
        <Icon type="starLine" size={25} fill="#E0E0E0" />
      </div>
      <Content
        css={css`
          min-height: 60px;
        `}
      >
        {data.bio}
      </Content>
      <div className="follow-container">
        <div className="follow-container-content">
          <Card size="default">
            <Icon type="followers" size={60} fill="#2D9CDB" />
            <Heading2>{data.followers}</Heading2>
            <Content>followers</Content>
          </Card>
          <Card size="default">
            <Icon type="repos" size={60} fill="#219653" />
            <Heading2>{data.public_repos}</Heading2>
            <Content>public repos</Content>
          </Card>
        </div>
        <div className="follow-container-content">
          <Card size="default">
            <Icon type="followings" size={60} fill="#F2994A" />
            <Heading2>{data.following}</Heading2>
            <Content>followings</Content>
          </Card>

          <Card size="default">
            <Icon type="gists" size={60} fill="#828282" />
            <Heading2>{data.public_gists}</Heading2>
            <Content>public gists</Content>
          </Card>
        </div>
      </div>
    </>
  );

  return (
    <StyledDiv>
      <Input placeholder="username" value={query} onChange={(e) => setQuery(e.target.value)} />
      <div className="results">
        {/*  <NoData /> */}
        {/*  <ProfileView /> */}
        {!data && <NoData />}
        {data && <ProfileView />}
      </div>
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

export default Search;
