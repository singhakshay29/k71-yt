import { useState, type ReactNode } from "react";
import { NavbarContext } from "./NavContext";

type Props = {
    children: ReactNode;
  };
const NavContext = ({ children }: Props) => {
    const [navOpen, setNavOpen] = useState<boolean>(false);

    return (
      <NavbarContext.Provider value={{ navOpen, setNavOpen }}>
        {children}
      </NavbarContext.Provider>
    );
  };
  
  export default NavContext;