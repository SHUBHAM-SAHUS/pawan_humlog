
import React, { useState } from "react";
import { Header } from "components/commoncomponent/header/Header";
// ui component for page layout
// import Header from "./components/shared/header";
// import Sidebar from "./components/shared/sidebar";

import "./App.css";

const App = ({ children }) => {
  const { history, categoryFilter, handleCategoryFilter } = children.props;

  // const [sidebarToggled] = useState(false);
  const [ resSidebarToggled, setResSidebarToggle] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light-theme");

  const changeTheme = () => {
    const theme = currentTheme === "dark-theme" ? "light-theme" : "dark-theme";
    if (theme !== currentTheme) setCurrentTheme(theme);
  };

  return (
             <>
               <Header/>        
              {children}
      </>
  );
};

export default App;