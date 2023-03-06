import axios from "axios";

const key = "3021d0a00504ba1e19ba2da5e2aaac4b";

export const fetchTrending = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)

    console.log(response)
    return response;
}

