import { useEffect, useState } from "react";
import { Button, Dropdown, Form, Nav, Navbar } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { Link, NavLink, useLocation } from "react-router-dom";

const TopBar = (props) => {
  const [search, setSearch] = useState("");
  const [placeHolder, setPlaceHolder] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.pathname) {
      setPlaceHolder(location.pathname);
    }
  }, [location]);
  return (
    <Navbar expand="lg" className="navbar navbar-dark px-3" style={{ backgroundColor: "#221f1f" }}>
      <Navbar.Brand href="#home">
        <img alt="" src={props.logo} className="d-inline-block align-top" style={{ width: "100px", height: "55px" }} />
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavLink className={"nav-link"} to={""}>
            Home
          </NavLink>
          <NavLink className={"nav-link"} to={""}>
            TV shows
          </NavLink>
          <NavLink className={"nav-link"} to={"/movies"}>
            Movies
          </NavLink>
        </Nav>
        <Form
          className="d-flex align-items-center"
          onSubmit={(event) => {
            event.preventDefault();
            props.RicercaUtente(search);
          }}
        >
          <Form.Control
            type="text"
            placeholder={`Search ${placeHolder.replace("/", "")}`}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            style={{
              color: "gray",
              boxShadow: "none",
              border: "1px solid grey",
              backgroundColor: "transparent",
            }}
          />

          <Button
            type="submit"
            style={{
              backgroundColor: "transparent",
              border: "1px solid gray",
              padding: 0,
              height: "36px",
              marginInlineEnd: "10px",
            }}
          >
            <i className="fa fa-search icons"></i>
          </Button>
        </Form>
      </Navbar.Collapse>
      <div className="d-flex align-items-center justify-content-between">
        <div id="kids" className=" d-none d-md-block">
          KIDS
        </div>
        <i className="fa fa-bell icons d-none d-md-block"></i>

        <Dropdown className="dropdown ml-4 mt-1">
          <Dropdown.Toggle
            className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ backgroundColor: "#221f1f", border: "none" }}
          >
            <i className="fa fa-user icons"></i>
          </Dropdown.Toggle>

          <DropdownMenu className="dropdown-menu-end bg-dark" aria-labelledby="dropdownMenuButton">
            <Link to={"/profile"} style={{ textDecoration: "none" }}>
              <DropdownItem className="dropdown-item text-white bg-dark" href="#p">
                Profile
              </DropdownItem>
            </Link>
            <Link to={"/settings"} style={{ textDecoration: "none" }}>
              <DropdownItem className="dropdown-item text-white bg-dark" href="#p">
                Settings
              </DropdownItem>
            </Link>
          </DropdownMenu>
        </Dropdown>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ boxShadow: "none" }}></Navbar.Toggle>
      </div>
    </Navbar>
  );
};
export default TopBar;
