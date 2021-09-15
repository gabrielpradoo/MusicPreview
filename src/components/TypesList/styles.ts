import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(--paddingMain);
  margin-bottom: 86px;
`;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 65px;
  justify-items: center;
`;

export const Subtitle = styled.h2`
  font-size: var(--fontMedium);
  color: var(--tertiary);
  margin-bottom: 35px;
`;
