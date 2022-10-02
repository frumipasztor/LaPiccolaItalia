import React, { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Container>
        <Navbar>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={scrolled ? "scrolled" : "navBar"}>
              <div className="logo">
                <a href="#home">La Piccola Italia</a>
              </div>
              <Nav.Link
                href="#restaurant"
                className={
                  activeLink === "restaurant"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("restaurant")}
              >
                Az étteremről
              </Nav.Link>
              <Nav.Link
                href="#menu"
                className={
                  activeLink === "menu" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("menu")}
              >
                Étlap
              </Nav.Link>
              <Nav.Link
                href="#weekly"
                className={
                  activeLink === "weekly" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("weekly")}
              >
                Heti ajánlatunk
              </Nav.Link>
              <Nav.Link
                href="#contact"
                className={
                  activeLink === "contact"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("contact")}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Router>
  );
}

export default NavBar;
