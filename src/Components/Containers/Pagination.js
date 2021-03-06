/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {RiArrowLeftSLine,RiArrowRightSLine} from "react-icons/ri";
import { useState } from "react";
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
  ${prop => prop.selector== prop.data  ? selected : ""}

`
function Pagination({pages}){

  const listItems = [];
  const [page, setPage] = useState(1)

  for (let i = 1; i <= pages; i++) {
    listItems.push(<PageStyle key={i} selector={i} onClick={()=>setPage(i)} data={page}>{i}</PageStyle>);
  };

  return (
    <UlStyle>
       <PageStyle key="star" data={page}><RiArrowLeftSLine/></PageStyle>
        {listItems}
        <PageStyle key="finish" data={page}><RiArrowRightSLine/></PageStyle>
    </UlStyle>
  );
}

export default Pagination;
