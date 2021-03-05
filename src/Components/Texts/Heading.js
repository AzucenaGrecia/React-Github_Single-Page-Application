import styled from '@emotion/styled'

const StyledH1 = styled.h1`
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`
const StyledH2 = styled.h2 `
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 35px;
  text-align: center;
  color: #000000;
`



function Heading1({children}){
 return(
   <StyledH1>{children}</StyledH1>
 );
} 


function Heading2({children}){
  return(
    <StyledH2>{children}</StyledH2>
  );
 } 

export { Heading1, Heading2 }