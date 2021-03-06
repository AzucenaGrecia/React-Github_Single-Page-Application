import styled from "@emotion/styled";

const sizes = {
  default: {
    width: "140px",
    flexDirection: "column",
    padding: "8px 0px",
    alignItems: "center",
    marginLeft: "8px",
  },
  favorites: { width: "300px", padding: "8px 12px", marginLeft: "8px" },
  repo: {
    width: "300px",
    flexDirection: "column",
    padding: "8px 12px",
    alignItems: "flex-start",
    marginLeft: "0px",
  },
};

const StyledCard = styled.div`
  width: ${(props) =>
    sizes[props.size] ? sizes[props.size].width : sizes.default.width};
  background: #ffffff;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  display: flex;
  flex-direction: ${(props) =>
    sizes[props.size]
      ? sizes[props.size].flexDirection
      : sizes.default.flexDirection};
  align-items: ${(props) =>
    sizes[props.size]
      ? sizes[props.size].alignItems
      : sizes.default.alignItems};
  padding: ${(props) =>
    sizes[props.size] ? sizes[props.size].padding : sizes.default.padding};

  & .card_container_horizontal {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: transparent;
    margin-left: ${(props) =>
      sizes[props.size]
        ? sizes[props.size].marginLeft
        : sizes.default.marginLeft};
  }
`;

function Card({ children, size, onClick }) {
  return <StyledCard size={size} onClick={onClick}>{children}</StyledCard>;
}

export { Card };
