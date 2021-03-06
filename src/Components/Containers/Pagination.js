/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {RiArrowLeftSLine,RiArrowRightSLine} from "react-icons/ri";
/* import { Link, useLocation } from "react-router-dom"; */

const selected = css`
  border-radius: 50%;
  background-color: #2D9CDB;
  color: white;
`
const UlStyle= styled.ul`
  height: 30px;
  padding: 12px 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  
`;
const PageStyle = styled.li`
  width: 26px;
  height: 22px;
  display: flex;
  justify-content: center;
  list-style-type:none;
  text-align: center;
  align-items: center;
  color:#4F4F4F;
  fill: #4F4F4F;
  ${prop => prop.selector==1 ? selected:""}

`
function Pagination({pages}){

  const listItems = [];

  for (let i = 1; i <= pages; i++) {
    listItems.push(<PageStyle key={i} selector={i}>{i}</PageStyle>);
  };

  return (
    <UlStyle>
       <PageStyle key="star"><RiArrowLeftSLine/></PageStyle>
        {listItems}
        <PageStyle key="finish"><RiArrowRightSLine/></PageStyle>
    </UlStyle>
  );
}

export default Pagination;
