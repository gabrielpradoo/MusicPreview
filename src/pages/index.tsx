import { AlbumList } from "../components/AlbumList";
import { Header } from "../components/Header";
import { SearchBar } from "../components/SearchBar";
import { BaseTemplate } from "../template/base";

export default function Home() {
  return (
    <BaseTemplate>
      <Header />
      <SearchBar />
      <AlbumList />
    </BaseTemplate>
  );
}
