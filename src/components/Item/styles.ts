import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 172px;
  align-items: center;
`;

export const Img = styled.img`
  background-color: #eee;
  width: 172px;
  height: 172px;
`;

export const Title = styled.h3`
  font-size: var(--fontMedium);
  color: var(--tertiary);
  margin: 12px 0;
`;

export const Description = styled.h4`
  font-size: var(--fontMedium);
  color: var(--secondary);
`;
