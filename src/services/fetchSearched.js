import axios from "axios";

const key = "3021d0a00504ba1e19ba2da5e2aaac4b";

export const fetchSearched = async (query) => {
    const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`);


    const trendingMovies = response.data.results

    return trendingMovies;
}