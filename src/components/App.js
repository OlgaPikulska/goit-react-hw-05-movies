import { MovieDetails } from "pages/MovieDetails";
import { Routes, Route } from "react-router-dom";
import { Header } from "../pages/Header";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { NotFound } from "./NotFound";
import { Cast } from "pages/Cast";
import { Reviews } from "pages/Reviews";

export const App = () => {

  return (
    <>

      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
