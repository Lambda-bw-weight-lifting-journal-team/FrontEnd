import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import styled from 'styled-components';
//import MarketingPage from './MarketingPage';
//import AboutPage from './AboutPage';
import SignIn from './SignIn';
import SignUp from './SignUp';


const Navi = styled.nav`
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-family: Roboto;
    background-color: #00a35e;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    max-width: 100%;
    font-size: 62.5%;
`;

const Title = styled.h1`
    font-size: 1.5rem;
    font-style: none;
    color: white;
    margin: 30px;
`;

const NavLinks = styled.div`
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    max-width: 100%;
    font-size: 62.5%;
    display: flex-row;
    justify-content: flex-end;
    font-size: 1.2rem;
    font-style: none;
    color: white;
    margin-top: 25px;
`;

const StyledLink = styled(Link)`
    color: white;
    font-style: none;
    margin-right: 30px;
    /* text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    } */
`;
const StyledA = styled.a`
    color: white;
    font-style: none;
    margin-right: 30px;
`;

const Navigation = () => {
    return (
        <div>
            <Navi>
                <Title>Weightlifting Journal</Title>
                <NavLinks>
                    <StyledA href="https://angry-pasteur-7b13fe.netlify.com/index.html"> Home </StyledA>
                    <StyledA href="https://angry-pasteur-7b13fe.netlify.com/about.html"> About </StyledA>
                    <StyledLink to="/sign-in"> Sign In </StyledLink>
                    <StyledLink to="/sign-up"> Sign Up </StyledLink>
                </NavLinks>
            </Navi>
                <Switch>
                    {/* <Route exact path="/">
                        <MarketingPage/>
                    </Route>
                    <Route exact path="/about-page">
                        <AboutPage />
                    </Route> */}
                    <Route exact path="/sign-in">
                        <SignIn />
                    </Route>
                    <Route exact path="/sign-up">
                        <SignUp />
                    </Route>
                </Switch>
        </div>

  );
};

// export const navBar = () => {
//   return (
//     <div>
//       <Navi>
//         <Title>Weightlifting journal</Title>
//         <NavLinks>
//           <StyledLink to="/"> Home </StyledLink>
//           <StyledLink to="/about-page"> About </StyledLink>
//         </NavLinks>
//       </Navi>
//     </div>
//   )
// }

export default Navigation;
