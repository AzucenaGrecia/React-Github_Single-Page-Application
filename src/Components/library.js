import { Heading1, Heading2 } from './Texts/Heading';
import Avatar from './UI/avatar';
import Button from './UI/button';
import { Content, ContentLargeBold, ContentSmall } from './Texts/Content';
import { Card } from './Containers/Card'
import Icon from './UI/icon';
import Input from './Forms/Input';
import { RepoResume } from './Containers/ReṕoResume';
import Navbar from './Containers/Navbar';
import gh from '../assets/image1.png';

function LibraryApp(){
  return (
    <div>
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
        <RepoResume>
          <div className="card_footer_section">
            <Icon type="circle" fill="#F2C94C" size={15}></Icon>
            <ContentSmall>gaearon</ContentSmall>
          </div>

          <div className="card_footer_section">
            <Icon type="starLine" fill="#03053D" size={15}></Icon>
            <ContentSmall>gaearon</ContentSmall>
          </div>
          
          <div className="card_footer_section">
            <Icon type="fork" fill="#03053D" size={15}></Icon>
            <ContentSmall>gaearon</ContentSmall>
          </div>
        </RepoResume>
      </Card>
    
      <ContentSmall>sdjfhkjdhjfkh</ContentSmall>
      <Card></Card>
      <img src={gh}/>
      <Input></Input>

      <RepoResume>
        <div className="card_footer_section">
          <Icon type="circle" fill="#F2C94C" size={15}></Icon>
          <ContentSmall>gaearon</ContentSmall>
        </div>

        <div className="card_footer_section">
          <Icon type="starLine" fill="#03053D" size={15}></Icon>
          <ContentSmall>gaearon</ContentSmall>
        </div>
        
        <div className="card_footer_section">
          <Icon type="fork" fill="#03053D" size={15}></Icon>
          <ContentSmall>gaearon</ContentSmall>
        </div>
      </RepoResume>

      <Navbar></Navbar>

    </div>
  );
}
export { LibraryApp}