/** @jsxImportSource @emotion/react */
import {
  RiHome2Fill,
  RiSearchFill,
  RiStarFill,
  RiStarLine,
  RiUserHeartFill,
  RiGitRepositoryFill,
  RiCodeBoxFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiGitBranchLine,

} from "react-icons/ri";
import { HiUserGroup } from "react-icons/hi";
import { FaGithub, FaCircle } from "react-icons/fa";

import { css } from "@emotion/react";

const iconSet = {
  home: RiHome2Fill,
  search: RiSearchFill,
  star: RiStarFill,
  starLine: RiStarLine,
  followers: HiUserGroup,
  followings: RiUserHeartFill,
  repos: RiGitRepositoryFill,
  gists: RiCodeBoxFill,
  leftArrow: RiArrowLeftSLine,
  rightArrow: RiArrowRightSLine,
  circle: FaCircle,
  fork: RiGitBranchLine,

  github: FaGithub,
};

function Icon({ type, fill, size, onClick }) {
  const ComponentToRender = iconSet[type];
  return (
    <ComponentToRender
      onClick={onClick}
      css={css`
        fill: ${fill};
        font-size: ${size}px;
      `}
    />
  );
}

export default Icon;

/* ***Todos los icons***
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
 */