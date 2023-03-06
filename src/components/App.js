import { MovieDetails } from "pages/MovieDetails";
import { Routes, Route } from "react-router-dom";
import { Header } from "../pages/Header";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { NotFound } from "./NotFound";

export const App = () => {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
