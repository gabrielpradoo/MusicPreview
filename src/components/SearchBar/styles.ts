import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 var(--paddingMain);
  margin-bottom: 75px;
`;

export const Label = styled.label`
  font-size: var(--fontMedium);
  color: var(--tertiary);
`;

export const Input = styled.input`
  font-size: var(--fontXLarge);
  font-weight: 700;
  color: var(--secondary);

  padding: 0px 10px 12px 10px;
  height: 72px;

  border: 0;
  border-bottom: 2px var(--secondary) solid;
  background-color: transparent;
  outline: none;
  color: #fff;
`;
