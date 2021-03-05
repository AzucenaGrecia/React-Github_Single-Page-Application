import './App.css';
import { Heading1, Heading2 } from './Components/Texts/Heading';
import { Global, css } from "@emotion/react";
import Avatar from './Components/UI/avatar';
import Button from './Components/UI/button';
import { Content, ContentLargeBold, ContentSmall } from './Components/Texts/Content';
import { Card } from './Components/Containers/Card'
import Input from './Components/Forms/Input';
import Navbar from './Components/Containers/Navbar';

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
      <Heading1>hello</Heading1>
      <Heading2>hello</Heading2>

      <Avatar src="" placeholder="R" size="small"></Avatar>
      <Button>Continue</Button>
      <Content>sdjfhkjdhjfkh</Content>
      <ContentLargeBold>sdjfhkjdhjfkh</ContentLargeBold>
      <ContentSmall>sdjfhkjdhjfkh</ContentSmall>
      <Card></Card>
      <Input></Input>

      <Navbar
        css={css`
          position: fixed;
          bottom: 0;
          width: 100%;
        `}
      />
    </div>
  );
}

export default App;
