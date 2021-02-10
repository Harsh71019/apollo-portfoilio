import React from "react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap"
import Link from "next/link"

const AppLink = ({ children, className, href }) => {
  return (
    <Link href={href}>
      <a className={className}>
        {children}
      </a>
    </Link>
  )
}

const AppNavbar = () => {
  return (
    <div className="navbar-wrapper">
      <Navbar expand="lg" className="navbar-dark fj-mw9">
        <Navbar.Brand >
          <AppLink href="/" className="mr-3 font-weight-bold navbar-brand">
            HarshPatel
          </AppLink>

        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">

            <AppLink href="/portfolios" className="nav-link mr-3">
              Portfolios
            </AppLink>
            <AppLink href="/forum/categories" className="nav-link mr-3">
              Forum
            </AppLink>
            <AppLink href="/cv" className="nav-link mr-3">
              CV
            </AppLink>
            <AppLink href="/askme" className="nav-link mr-3">
              Ask Me
            </AppLink>

          </Nav>
          <Nav>
            <AppLink href="/login" className="mr-3 nav-link">
              Sign In
            </AppLink>
            <AppLink href="/register" className="mr-3 btn btn-success bg-green-2 bright">
              Sign up
            </AppLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
