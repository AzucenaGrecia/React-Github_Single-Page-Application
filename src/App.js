import './App.css';
import { Heading1, Heading2 } from './Components/Texts/Heading';
import { Global, css } from "@emotion/react";
import Button from './Components/UI/button';


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
      <Button>Continue</Button>
    </div>
  );
}

export default App;
