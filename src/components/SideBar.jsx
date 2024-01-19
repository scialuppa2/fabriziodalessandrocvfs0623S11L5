import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";


const SideBar = () => {
  const location = useLocation();

  return (
    <>
      <Navbar
        expand="md"
        className="bg-navbar fixed-left justify-content-between"
        id="sidebar"
        style={{ marginBottom: "88px" }}
      >
        <Container className="nav-container flex-column">
          <Link to="/" className="myLogo navbar-brand" aria-label="Spotify Home">
            <img
              src="/assets/logo/Spotify_Logo.png"
              width="131"
              height="40"
              className="d-inline-block align-top"
              alt="Spotify Logo"
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="collapse navbar-collapse" id="basic-navbar-nav">
            <Nav className="flex-column">
              <Link to="/" className="nav-link" aria-label="Home">
                <i className="fas fa-home fa-lg"></i>&nbsp; Home
              </Link>

              <Link to="/yourLibrary" className="nav-link" aria-label="Your Library">
                <i className="fas fa-book-open fa-lg"></i>&nbsp; Your Library
              </Link>

              <span className={location.pathname === "/" ? "" : "d-none"}>
                <SearchBar />
              </span>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <div className="nav-btn">
          <Button className="signup-btn" type="button" aria-label="Sign Up">
            Sign Up
          </Button>
          <Button className="login-btn" type="button" aria-label="Login">
            Login
          </Button>
          <p>
            <a href="#" aria-label="Cookie Policy">
              Cookie Policy
            </a>{" "}
            |{" "}
            <a href="#" aria-label="Privacy">
              Privacy
            </a>
          </p>
        </div>
      </Navbar>
    </>
  );
};
export default SideBar;
