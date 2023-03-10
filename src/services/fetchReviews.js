import axios from "axios";

const key = "3021d0a00504ba1e19ba2da5e2aaac4b";

export const fetchReviews = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}`);
    const details = response.data.results;

    return details;
}