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
      <ContentSmall>Turn ES6+ code into readable vanilla ES5 with source maps and more!</ContentSmall>
      
      <Card size="default">
        <Icon type="followers" fill="#2D9CDB" size={60}></Icon>
        <Heading2>64K</Heading2>
        <Content>followers</Content>
      </Card>

      <Card size="favorites">
        <Avatar src="" placeholder="R" size="small"></Avatar>
        <div className="card_container_horizontal">
          <Content>Dan Abramov</Content>
          <ContentSmall>gaearon</ContentSmall>
        </div>
        <Icon type="star" fill="#F2C94C" size={25}></Icon>
      </Card>

      <Card size="favorites">
        <Avatar src="" placeholder="R" size="small"></Avatar>
        <div className="card_container_horizontal">
          <Content>LazyBwoy</Content>
        </div>
      </Card>

      <Card size="repo">
        <ContentLargeBold>gaearon/6to5</ContentLargeBold>
        <div className="card_container_horizontal">
          <ContentSmall>Turn ES6+ code into readable vanilla ES5 with source maps and more!</ContentSmall>
        </div>
      </Card>
    
      <ContentSmall>sdjfhkjdhjfkh</ContentSmall>
      <Card></Card>
      <img src={gh}/>
      <Input></Input>
    </div>
  );
}

export default App;
