import { Header } from "./Header";
import { fetchTrending } from "services/api";

export const App = () => {

  fetchTrending();
  return (
    <>
      <Header />
    </>
  );
};
