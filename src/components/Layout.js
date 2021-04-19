import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Header from "./Header";
import ThemeContext from "../contexts/themeContext";

const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const bg =
    theme == "dark"
      ? "body {background-color: #404042; color: gray;}"
      : "body {background-color: #fff; color: #000;}"
  return (
    <>
      <style>{bg}</style>
      <Header />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout;
