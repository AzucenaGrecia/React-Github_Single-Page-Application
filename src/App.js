import './App.css';
import { Global, css } from "@emotion/react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './Pages/Home';
function App() {
  return (
    <div>
      <Global 
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;700&display=swap');
          * {
            font-family: 'Source Code Pro', monospace;
            color: #000000;
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            background:  #E5E5E5;
          }
        `
        }
      />
     
     {/* <LibraryApp></LibraryApp> */}

      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
