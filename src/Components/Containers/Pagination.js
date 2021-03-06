/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useState } from "react";
import { useHistory } from "react-router";
/* import { Link, useLocation } from "react-router-dom"; */

const selected = css`
  border-radius: 50%;
  background-color: #2d9cdb;
  color: white;
`;
const UlStyle = styled.ul`
  height: 30px;
  padding: 12px 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const LIStyle = styled.li`
  width: 26px;
  height: 22px;
  display: flex;
  justify-content: center;
  list-style-type: none;
  text-align: center;
  align-items: center;
  color: #4f4f4f;
  fill: #4f4f4f;
  ${(prop) => (prop.selector == prop.data ? selected : "")}
`;
function Pagination({ pages }) {
  const listItems = [];
  const [page, setPage] = useState(1);
  const history = useHistory();

  for (let i = 1; i <= pages; i++) {
    listItems.push(
      <LIStyle
        key={i}
        selector={i}
        onClick={() => {
          setPage(i);
          history.push(`/users/codekacode/followers?page=${i}`)
        }}
        data={page}
      >
        {i}
      </LIStyle>
    );
  }

  return (
    <UlStyle>
      <LIStyle key="star" data={page}>
        <RiArrowLeftSLine />
      </LIStyle>
      {listItems}
      <LIStyle key="finish" data={page}>
        <RiArrowRightSLine />
      </LIStyle>
    </UlStyle>
  );
}

export default Pagination;
