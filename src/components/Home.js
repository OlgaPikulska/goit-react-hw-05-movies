import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fetchTrending } from "services/api";
import { Loader } from "./Loader";

const StyledHeader = styled.h2`
margin: 15px 0px 15px 10px;
`
const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: orange;
  }
`;

const StyledList = styled.ul`
margin-left: 45px;
line-height: 1.5;`


const MoviesList = ({ movies }) => {
    return (
        <StyledList>
            {movies.map(movie => (
                <li key={movie.id}><StyledLink>{movie.title}</StyledLink></li>
            ))}
        </StyledList>
    )
}

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
    console.log(movies)
    return (
        <>
            <StyledHeader>Trending today</StyledHeader>
            <MoviesList movies={movies} />
            {isLoading && <Loader />}
        </>

    )
}