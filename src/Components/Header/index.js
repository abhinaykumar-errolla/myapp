import React from "react"
import {
  HeaderContainer,
  Heading,
  Navigation,
  NavigationContainer,
} from "./styledComponents";

const Header = () => (
  <HeaderContainer>
    <Heading>Madelyn Torff</Heading>
    <NavigationContainer>
      <Navigation to="/">About</Navigation>
      <Navigation to="/">project</Navigation>
      <Navigation to="/">contact</Navigation>
    </NavigationContainer>
  </HeaderContainer>
);

export default Header;
