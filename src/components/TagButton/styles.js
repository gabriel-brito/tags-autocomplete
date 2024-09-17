import { styled } from "styled-components";

export const TagButton = styled.button`
  font-size: 1.2rem;
  background-color: transparent;
  border-radius: 12px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: #eee;
    cursor: pointer;

    span {
      opacity: 1;
    }
  }
`;

export const Icon = styled.span`
  align-items: center;
  background-color: lightgrey;
  border-radius: 50%;
  display: flex;
  font-size: 0.8rem;
  height: 20px;
  justify-content: center;
  opacity: 0.3;
  padding: 4px;
  width: 20px;
`;
