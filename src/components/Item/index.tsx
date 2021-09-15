import { Container, Title, Description, Img } from "./styles";

interface ItemProps {
  image?: string;
  title?: string;
  description?: string;
}

export const Item = ({ image, title, description }: ItemProps) => {
  return (
    <Container>
      <Img src={image || "https://via.placeholder.com/172/172"} />
      <Title>{title || "Nome do Album"}</Title>
      <Description>{description || "Nome do Artista"}</Description>
    </Container>
  );
};
