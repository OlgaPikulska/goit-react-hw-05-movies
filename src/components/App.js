import { Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Movies } from "./Movies";

export const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />


      </Routes>
    </>
  );
};
