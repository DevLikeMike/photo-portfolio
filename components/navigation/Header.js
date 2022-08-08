import { useState } from "react";
import Link from "next/link";
// Component imports
import Hamburger from "./Hamburger";
import SideNav from "./SideNav";
// External imports
import styled from "styled-components";

const Navbar = styled.nav`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  background-color: transparent;
  z-index: 100;
  letter-spacing: 0.1em;
  color: #000;

  h2 {
    font-size: 1.2rem;
    justify-self: flex-start;
    align-self: center;
    margin-right: auto;
    padding-left: 2rem;
  }
`;

const NavList = styled.ul`
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;

const NavItem = styled.li`
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0 2rem;
  font-size: 1.15rem;
  height: 80%;
  display: none;
  transition: color 0.5s ease-in-out;

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      color: #000;
      text-decoration: underline;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export default function Header() {
  const [sideNavigationOpen, setSideNavigationOpen] = useState(false);

  const openHandler = () => {
    setSideNavigationOpen(!sideNavigationOpen);
  };

  return (
    <Navbar>
      <h2>M H | Photography</h2>
      <NavList>
        <NavItem>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/portfolio'>
            <a>Portfolio</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/projects'>
            <a>Projects</a>
          </Link>
        </NavItem>

        <NavItem>
          <Link href='/contact'>
            <a>Contact</a>
          </Link>
        </NavItem>

        <Hamburger
          openHandler={openHandler}
          sideNavigationOpen={sideNavigationOpen}
        />
      </NavList>
      <SideNav sideOpen={sideNavigationOpen} openHandler={openHandler} />
    </Navbar>
  );
}
