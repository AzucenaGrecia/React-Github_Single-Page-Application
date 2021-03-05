import './App.css';
import { Heading1, Heading2 } from './Components/Texts/Heading';
import { Global, css } from "@emotion/react";
import Avatar from './Components/UI/avatar';
import Button from './Components/UI/button';
import { Content, ContentLargeBold, ContentSmall } from './Components/Texts/Content';
import { Card } from './Components/Containers/Card'
import Icon from './Components/UI/icon';
import gh from './assets/image1.png'
import Input from './Components/Forms/Input';
import { RepoResume } from './Components/Containers/ReṕoResume';
import Navbar from './Components/Containers/Navbar';
import { LibraryApp } from './Components/library';
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
          }
        `
        }
      />
     
     <LibraryApp></LibraryApp>

    </div>
  );
}

export default App;
