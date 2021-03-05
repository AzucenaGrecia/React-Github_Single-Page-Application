import styled from "@emotion/styled";
import { css } from "@emotion/react";


const baseStyles = css`
  text-align: center;
  font-weight: normal;
`;

const StyledContent = styled.p`
  ${baseStyles}
  font-size: 16px;
  line-height: 20px;
`;

const StyledContentLB = styled(StyledContent)`
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
`;

const StyledContentS = styled(StyledContent)`
  font-size: 12px;
  line-height: 15px;
`;

function Content ({children}) {
  return (
    <StyledContent>{children}</StyledContent>
  )
}

function ContentLargeBold ({children}) {
  return (
    <StyledContentLB>{children}</StyledContentLB>
  )
}

function ContentSmall ({children}) {
  return (
    <StyledContentS>{children}</StyledContentS>
  )
}

export {Content, ContentLargeBold, ContentSmall }