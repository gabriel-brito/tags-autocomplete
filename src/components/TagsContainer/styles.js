import { styled } from "styled-components";

export const Container = styled.main`
  background-color: white;
  border-radius: 12px;
  margin: 0 auto;
  max-width: 980px;
  padding: 24px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 32px;
`;

export const Wrapper = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  min-height: 76px;
  padding: 12px;
  width: 100%;
`;

export const TagInput = styled.input`
  border: 0;
  outline: 0;
`;
