import axios from "axios";

const key = "3021d0a00504ba1e19ba2da5e2aaac4b";

export const fetchReviews = async (movieId) => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}`);

    console.log(response)
    const details = response.data.results;
    console.log(details);

    return details;
}