import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchTrending } from "services/fetchTrending";
import { Loader } from "./Loader";
import { Error } from "./Error";
import { MoviesList } from "./MoviesList";

const StyledHeader = styled.h2`
margin: 15px 0px 15px 10px;
`

export const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const handleMoviesRequest = async () => {
            setIsLoading(true)
            try {
                const fetchedMovies = await fetchTrending();
                setMovies(fetchedMovies);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        }
        handleMoviesRequest()
    }, [])

    return (
        <>
            <StyledHeader>Trending today</StyledHeader>
            <MoviesList movies={movies} />
            {isLoading && <Loader />}
            {error && <Error text="An error occurred. Please try again" />}
        </>
    )
}