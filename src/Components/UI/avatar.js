import styled from "@emotion/styled";

const StyledImg = styled.div`
  width: ${(props) => props.size};
  height:  ${(props) => props.size};
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "#333")};
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: white;
    font-weight: bold;
    font-size: 30px;
    background-color: transparent;
  }
`;

const sizeObj = {
  "medium": "60px",
  "small": "40px"
}


function Avatar({ src, placeholder, size, onClick}) {
  const sizeAvatar = sizeObj[size] || "60px";
  return <StyledImg onClick={onClick}src={src } size={sizeAvatar}>{!src && <p>{placeholder}</p>}</StyledImg>;
}

export default Avatar;
