import axios from "axios";

const key = "3021d0a00504ba1e19ba2da5e2aaac4b";

export const fetchTrending = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`);
    const trendingMovies = response.data.results

    return trendingMovies;
}

