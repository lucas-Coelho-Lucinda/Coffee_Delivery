import styled from "styled-components";
import { propsButtonMoveRegisterProps } from "../../types";

export const AlignPagination = styled.div`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 120px;
`;

export const ButtonMoveRegister = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "activePagination",
})<propsButtonMoveRegisterProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  color: ${(props) => props.theme["purple-300"]};
  background: transparent;
  border: none;
  border-radius: 5px;
  padding: 0.2rem;
  cursor: pointer;

  ${(props) => (props.activePagination == true ? `cursor: not-allowed` : `display: none;`)}

  &:active {
    transform: scale(0.95);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    outline: 1px solid ${(props) => props.theme["purple-300"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["purple-100"]};
  }
`;
