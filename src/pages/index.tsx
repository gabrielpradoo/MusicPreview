import { TypesList } from "../components/TypesList";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { BaseTemplate } from "../template/base";

export default function Home() {
  return (
    <BaseTemplate>
      <Header />
      <SearchBar />
      <TypesList subtitle="Álbuns buscados recentemente" />
      <TypesList subtitle="Álbuns buscados recentemente" />
    </BaseTemplate>
  );
}
