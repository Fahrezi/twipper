import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: none;
  background-color: #2443ba;
  color: #ffffff;
  padding: 5px 10px;

  &:disabled {
    background-color: #7892f5;
    cursor: initial;
  }
`;

export default Button;
