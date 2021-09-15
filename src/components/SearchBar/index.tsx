import { Container, Input, Label } from "./styles";

export const SearchBar = () => {
  return (
    <Container>
      <Label>Busque por artistas, álbuns ou músicas</Label>
      <Input placeholder="Comece a escrever..." />
    </Container>
  );
};
