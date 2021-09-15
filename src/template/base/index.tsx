import { ReactNode } from "react";
import { Container } from "./styles";

interface BaseTemplateProps {
  children: ReactNode;
}

export const BaseTemplate = ({ children }: BaseTemplateProps) => {
  return <Container>{children}</Container>;
};
