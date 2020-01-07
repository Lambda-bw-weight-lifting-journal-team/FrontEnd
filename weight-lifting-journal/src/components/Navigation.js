import React from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import styled from 'styled-components';
import MarketingPage from './MarketingPage';
import AboutPage from './AboutPage';
import SignIn from './SignIn';
import SignUp from './SignUp';


const Navi = styled.nav`
  background: #007343;
  padding: 4px;
  height: 15%;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: left;
  color: #fff;
`;

const NavLinks = styled.div`
  color: #fff;
  text-align right;
  display: flex;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const FormInput = styled.input`
  width: 130px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
`;

const Navigation = () => {
    return (
        <div>
            <Navi>
                <Title>Weight Lifting Journal</Title>
                <NavLinks>
                    <StyledLink to="/"> Home </StyledLink>
                    <StyledLink to="/about-page"> About </StyledLink>
                    <StyledLink to="/sign-in"> Sign In </StyledLink>
                    <StyledLink to="/sign-up"> Sign Up </StyledLink>
                    <form>
                        <label>
                            <FormInput type="text" name="search" placeholder="Search.." />
                        </label>
                    </form>
                </NavLinks>
            </Navi>
                <Switch>
                    <Route exact path="/">
                        <MarketingPage/>
                    </Route>
                    <Router exact path="/about-page">
                        <AboutPage />
                    </Router>
                    <Route exact path="/sign-in">
                        <SignIn />
                    </Route>
                    <Route exact path="/sign-up">
                        <SignUp />
                    </Route>
                </Switch>
        </div>

    );
}

export default Navigation;
