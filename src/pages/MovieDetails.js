import { useParams } from "react-router-dom"
import { fetchDetails } from "services/fetchDetails";
import { useEffect, useState } from "react";

export const MovieDetails = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [details, setDetails] = useState({});
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        const handleMoviesRequest = async () => {
            setIsLoading(true)
            try {
                const fetchedMovie = await fetchDetails(id);
                setDetails(fetchedMovie);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        handleMoviesRequest()
    }, [])

    console.log(details)
    return (
        <>
            <h2>{details.title}</h2>
            <img src={`//image.tmdb.org/t/p/w500/${details.poster_path}`} />
        </>
    )
}