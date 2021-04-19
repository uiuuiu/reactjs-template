import React, { useContext } from "react";
import { Form, Navbar, FormControl, Button } from "react-bootstrap";
import ThemeContext from "../contexts/themeContext";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar bg={theme} variant={theme}>
        <ThemeSwitcher />
      </Navbar>
    </>
  )
};

export default Header;
