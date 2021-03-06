import "./App.css";
import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Pages/Home";
import Search from "./Pages/Search";
import { Favorite } from "./Pages/Favorite";
import { Followers } from "./Pages/Followers";
import { Repos } from "./Pages/Repos";
import { Followings } from "./Pages/Followings";
import GithubService from "./services/github_service";
function App() {
  return (
    <div>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap");
          * {
            font-family: "Source Code Pro", monospace;
            color: #000000;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            background: #f2f2f2;
          }
        `}
      />

      <Router>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/favorites" component={Favorite} />
          <Route path="/followers" component={Followers} />
          <Route path="/followings" component={Followings} />
          <Route path="/search" component={Search} />
          <Route path="/repos" component={Repos} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
