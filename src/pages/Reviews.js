import { useEffect, useState } from "react";
import { fetchReviews } from "services/fetchReviews";
import { useParams } from "react-router-dom"


export const Reviews = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [reviews, setReviews] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const handleMoviesRequest = async () => {
            setIsLoading(true)
            try {
                const fetchedReviews = await fetchReviews(id);
                setReviews(fetchedReviews);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        handleMoviesRequest()
    }, [id])

    return (
        <ul>
            {reviews.length > 0
                ?
                reviews.map(review => (
                    <li key={review.id}>
                        <b>Author: {review.author}</b>
                        <p>{review.content}</p>
                    </li>
                ))
                :
                "We don't have any reviews for this movie"}
        </ul>
    )
}