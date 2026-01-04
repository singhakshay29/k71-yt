import { createContext } from "react";

export type NavbarContextType = {
  navOpen: boolean;
  setNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const NavbarContext =
  createContext<NavbarContextType | undefined>(undefined);