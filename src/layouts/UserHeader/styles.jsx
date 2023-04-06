import styled from "styled-components";

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  height: 56px;
  z-index: 99;
  background-color: #118080;
`;

export const Button = styled.button`
  padding: 4px 8px;
  color: gray;
  border-radius: 4px;
  cursor: pointer;
`;
