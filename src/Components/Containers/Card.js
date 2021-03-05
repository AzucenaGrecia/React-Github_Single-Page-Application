import styled from "@emotion/styled"


const StyledCard = styled.div`
  width: 140px;
  height: 140px;
  background: #FFFFFF;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
`;

function Card ({ children }){
  return (
    <StyledCard>{ children }</StyledCard>
  );
}

export { Card }