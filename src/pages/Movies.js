import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MoviesList } from "./MoviesList";
import { fetchSearched } from "services/fetchSearched";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";

const StyledForm = styled.form`
margin: 20px 0px 20px 15px;`

const StyledInput = styled.input`
width: 300px;
  height: 30px;
  border: 1px solid rgb(184, 183, 183);
  outline: none;
`

const StyledButtonLabel = styled.span`
position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`
const StyledFormButton = styled.button`
  display: inline-block;
  height: 30px;
  color: black;
  padding-left: 5px;
  padding-right: 5px;
border: 1px solid rgb(155, 154, 154);
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: orange;
    border-color: orange;
  }
`


export const Movies = () => {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    console.log(movies);
    const handleChange = (e) => {
        const { value } = e.target;
        setQuery(value);
    };
    useEffect(() => {
        const handleMoviesRequest = async () => {
            setIsLoading(true)
            try {
                const fetchedMovies = await fetchSearched(query);
                setMovies(fetchedMovies);
            } catch (error) {
                setError(error.message)
            } finally {
                setIsLoading(false)
            }
        };

        handleMoviesRequest();
    }, [query])


    const handleSubmit = (e) => {
        e.preventDefault();
    }



    return (<>
        <StyledForm onSubmit={handleSubmit}>
            <StyledInput
                type="text"
                autocomplete="off"
                autoFocus
                name="query"
                onChange={handleChange}
            />
            <StyledFormButton type="submit">
                <StyledButtonLabel>Search</StyledButtonLabel>Search
            </StyledFormButton>
        </StyledForm>
        <MoviesList movies={movies} />
        {isLoading && <Loader />}
        {error && <Error text="An error occurred. Please try again" />}
        {movies.length === 0 && query && !isLoading && <Error text="Nothing found! Try again" />}
    </>

    )
}