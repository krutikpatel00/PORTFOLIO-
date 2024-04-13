import React, { createContext, useContext, useState } from "react";

// Creating the context
export const NavBarContext = createContext();

// Provider component
export const NavBarProvider = ({ children }) => {
      const [WidthNav, setWidthNav] = useState(0);
      const [isNavOpen, setIsNavOpen] = useState(false);
      const [isLoading, setisLoading] = useState(true)

      const navToggle = () => {
            setIsNavOpen(!isNavOpen)

      }
      const LoaderTimer = () => {
            setisLoading(false)
      }
      setTimeout(LoaderTimer, 3000)
      return (
            <NavBarContext.Provider value={{ WidthNav, setWidthNav, navToggle, isNavOpen, setIsNavOpen, isLoading, setisLoading }}>
                  {children}
            </NavBarContext.Provider>
      );
};

// Custom hook to use NavBarContext
export const useNavBarContext = () => useContext(NavBarContext);
