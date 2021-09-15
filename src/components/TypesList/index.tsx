import { Item } from "../Item";
import { Container, Subtitle, ListWrapper } from "./styles";

interface TypesListProps {
  subtitle: string;
}

export const TypesList = ({ subtitle }: TypesListProps) => {
  return (
    <Container>
      <Subtitle>{subtitle}</Subtitle>
      <ListWrapper>
        <Item />
        <Item />
        <Item />
        <Item />
      </ListWrapper>
    </Container>
  );
};
