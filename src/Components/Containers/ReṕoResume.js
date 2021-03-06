import styled from "@emotion/styled"


const StyledCardFooter = styled.div`
  width: 100%;
  display:flex;
  align-items:center;
  margin-top:4px;
  background: transparent;

  & .card_footer_section{
    display:flex;
    align-items:center;
    margin-right: 16px;
    gap: 4px;
    background: transparent;
  }

`

function RepoResume({ children }){
  return(
    < StyledCardFooter>{ children }</ StyledCardFooter>
  );
 }

 export { RepoResume }