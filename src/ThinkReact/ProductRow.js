import styled, { css } from "styled-components";

const StyledTd = styled.td`
  ${(props) =>
    props.red &&
    css`
      color: red;
    `};
`;

export default function ProductRow({ product }) {
  const { name, price, stocked } = product;

  return (
    <tr>
      <StyledTd red={!stocked}>{name}</StyledTd>
      <StyledTd>{price}</StyledTd>
    </tr>
  );
}
