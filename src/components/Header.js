import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
//height: 50px;
box-shadow: 1px -2px 10px 3px rgba(0,0,0,0.4);
padding-top: 15px;
padding-bottom: 15px;
padding-left: 15px;
`

const StyledLink = styled(NavLink)`
text-decoration: none;
color: black;
//padding: 15px 5px 15px 5px;
margin-right: 15px;
&.active {
    color: orange;
  }
`

export const Header = () => {
    return (
        <StyledNav>
            <StyledLink>Home</StyledLink>
            <StyledLink>Movies</StyledLink>
        </StyledNav>
    )
}