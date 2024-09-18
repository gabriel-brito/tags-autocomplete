import { styled } from "styled-components";

import TagButton from "../TagButton";

export const List = styled.ul`
  list-style: none;
  padding: 12px;
  margin: 24px auto 0;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.4) inset;
`;

export const ListItem = styled.li`
  margin-bottom: 8px;
`;

export const ListAction = styled(TagButton)`
  padding: 8px;
`;
