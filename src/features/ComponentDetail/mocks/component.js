const context = `
import { createContext, useState } from "react";

export const NavbarContext = createContext({});

export default function NavbarProvider({ children }) {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => setShowLinks((prev) => !prev);

  return (
    <NavbarContext.Provider value={{ showLinks, toggleLinks }}>
      {children}
    </NavbarContext.Provider>
  );
}
`
const index = `
import Navbar from "./Navbar";
import NavbarLeftItems from "./NavbarLeftItems";
import RightItems from "./NavbarRightItems";
import NavItem from "./NavbarItem";
import NavbarLogo from "./NavbarLogo";
import NavbarBurgerButton from "./NavbarBurgerButton";
import NavbarItems from "./NavbarItems";

const all = Navbar;

all.Logo = NavbarLogo;
all.BurgerButton = NavbarBurgerButton;
all.Items = NavbarItems;
all.LeftItems = NavbarLeftItems;
all.RightItems = RightItems;
all.NavItem = NavItem;

export default Navbar
`
const Navbar = `
import { Box, styled } from "@mui/material";
import NavbarProvider from "./context";

const NavbarWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "24px 16px",
  alignItems: "center",
  position: "relative",
  // only for desktop
  [theme.breakpoints.up("md")]: {
    padding: "16px 24px",
  },
  // replace this styles
  background: "#F2F4F9",
  filter: "drop-shadow(0px 1px 0px #7A92C5)",
}));

export default function Navbar({ children }) {
  return (
    <NavbarProvider>
      <NavbarWrapper id="navbar">{children}</NavbarWrapper>
    </NavbarProvider>
  );
}
`
const NavbarBurgerButton = `
import { useContext } from "react";
import { IconButton, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavbarContext } from "./context";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export default function NavbarBurgerButton() {
  const { showLinks, toggleLinks } = useContext(NavbarContext);

  return (
    <StyledIconButton onClick={() => toggleLinks()} size="small">
      {showLinks ? <CloseIcon /> : <MenuIcon />}
    </StyledIconButton>
  );
}
`
const NavbarItem = `
import { Box, styled } from "@mui/material";

const NavbarItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "16px 18px",
  // replace this styles
  borderBottom: "1px solid rgba(122, 146, 197, 0.32)",
  // only for desktop
  [theme.breakpoints.up("md")]: {
    padding: "0",
    // replace this styles
    borderBottom: "none",
  },
}));

export default function NavItem({ children }) {
  return <NavbarItemContainer>{children}</NavbarItemContainer>;
}
`
const NavbarItems = `
import { useContext } from "react";
import { Box, styled } from "@mui/material";
import { NavbarContext } from "./context";

const NavbarItemsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "show" && prop !== "isDesktop",
})(({ theme, show }) => ({
  width: "100%",
  display: show ? "flex" : "none",
  flexDirection: "column-reverse",
  gap: "0",
  position: "absolute",
  top: "100%",
  left: "0px",
  // replace this styles
  backgroundColor: "#F2F4F9",
  // only for desktop
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    position: "relative",
    top: "0px",
    left: "0px",
    marginLeft: "40px",
    // replace this styles
    gap: "16px",
    backgroundColor: "transparent",
  },
}));

export default function NavbarItems({ children, ...props }) {
  const { showLinks } = useContext(NavbarContext);
  return (
    <NavbarItemsContainer show={showLinks} {...props}>
      {children}
    </NavbarItemsContainer>
  );
}
`
const NavbarLeftItems = `
import { Box, styled } from "@mui/material";

const LeftItemsContainer = styled(Box)(({ theme }) => ({
  width: "auto",
  flexDirection: "column",
  gap: "0",
  // only for desktop
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    // replace this styles
    gap: "24px",
  },
}));

export default function NavbarLeftItems({ children, ...props }) {
  return <LeftItemsContainer {...props}>{children}</LeftItemsContainer>;
}
`
const NavbarLogo = `
import { styled } from "@mui/material";

const NavbarLogo = styled("img")(() => ({
  width: "72px",
  height: "32px",
  objectFit: "contain",
}));

export default NavbarLogo;
`
const NavbarRightItems = `
import { Box, styled } from "@mui/material";

const RightItemsContainer = styled(Box)(({ theme }) => ({
  width: "auto",
  padding: "16px",
  // replace this styles
  display: "flex",
  gap: "16px",
  flexDirection: "column",
  // only for desktop
  [theme.breakpoints.up("md")]: {
    display: "flex",
    flexDirection: "row",
    padding: "0",
    // replace this styles
    gap: "24px",
  },
}));

export default function RightItems({ children, ...props }) {
  return <RightItemsContainer>{children}</RightItemsContainer>;
}
`
const App = `
import { Button, Link, Stack, Typography } from "@mui/material";
import Navbar from "./index";

export default function App() {
  return (
    <Navbar>
      <Stack direction="row" spacing="0" alignItems="center">
        <Navbar.Logo src="https://bootswatch.com/_assets/img/logo.svg" />
        <Typography color="black" variant="body1" fontSize="1.25rem">
          Bootswatch
        </Typography>
      </Stack>
      <Navbar.BurgerButton />
      <Navbar.Items justifyContent="space-between">
        <Navbar.LeftItems direction="row" spacing="16px" alignItems="center">
          <Navbar.NavItem>
            <Link href="https://www.google.com" target="_blank">
              <Typography color="black">Themes</Typography>
            </Link>
          </Navbar.NavItem>
          <Navbar.NavItem>
            <Link href="https://www.google.com" target="_blank">
              <Typography color="black">Help</Typography>
            </Link>
          </Navbar.NavItem>
          <Navbar.NavItem>
            <Link href="https://www.google.com" target="_blank">
              <Typography color="black">Blog</Typography>
            </Link>
          </Navbar.NavItem>
        </Navbar.LeftItems>
        <Navbar.RightItems>
          <Button variant="contained">Github</Button>
          <Button variant="contained">Twitter</Button>
        </Navbar.RightItems>
      </Navbar.Items>
    </Navbar>
  );
}
`
const entry = `
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`

export {
  index,
  Navbar,
  NavbarBurgerButton,
  context,
  NavbarItem,
  NavbarItems,
  NavbarLeftItems,
  NavbarLogo,
  NavbarRightItems,
  App,
  entry
}
