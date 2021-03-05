import logo from './logo.svg';
import './App.css';
import Icon from "./Components/UI/icon";
function App() {
  return (
    <div className="App">

      <Icon type="home" size={60} fill="#BDBDBD"/>
      <Icon type="search" size={60} fill="#828282"/>
      <Icon type="star" size={60} fill="#BDBDBD"/>
      <Icon type="starLine" size={60} fill="03053D"/>
      <Icon type="followers" size={60} fill="#2D9CDB"/>
      <Icon type="followings" size={60} fill="#F2994A"/>
      <Icon type="repos" size={60} fill="#219653"/>
      <Icon type="gists" size={60} fill="#828282"/>
      <Icon type="leftArrow" size={60} fill="#828282"/>
      <Icon type="rightArrow" size={60} fill="#828282"/>
      <Icon type="circle" size={30} fill="#F2C94C"/>
      <Icon type="fork" size={30} />
      <Icon type="github" size={60} />
    </div>
  );
}

export default App;
