import styled from "@emotion/styled";
import { css } from "@emotion/react";


const baseStyles = css`
  font-weight: normal;
  background: transparent;
  
`;

const StyledContent = styled.p`
  ${baseStyles}
  font-size: 16px;
  line-height: 20px;
  
`;

const StyledContentLB = styled(StyledContent)`
  text-align: center;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  ${prop => prop.css}
`;

const StyledContentS = styled(StyledContent)`
  text-align: center;
  font-size: 12px;
  line-height: 15px;
  ${prop => prop.css}
  
`;

function Content ({children, onClick}) {
  return (
    <StyledContent onClick={onClick}>{children}</StyledContent>
  )
}

function ContentLargeBold ({children,css}) {
  return (
    <StyledContentLB css={css}>{children}</StyledContentLB>
  )
}

function ContentSmall ({children,css}) {
  return (
    <StyledContentS css={css}>{children}</StyledContentS>
  )
}

export {Content, ContentLargeBold, ContentSmall }