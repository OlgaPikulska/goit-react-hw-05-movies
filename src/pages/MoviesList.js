import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledLink = styled(NavLink)`
  color: blue;

  &.active {
    color: orange;
  }
`;

const StyledList = styled.ul`
margin-left: 45px;
line-height: 1.5;`


export const MoviesList = ({ movies }) => {
  return (
    <StyledList>
      {movies.map(movie => (
        <li key={movie.id}><StyledLink to={`/movies/${movie.id}`}>{movie.title}</StyledLink></li>
      ))}
    </StyledList>
  )
}