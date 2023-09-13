import { Component } from "react";
import { Dropdown } from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

class Header extends Component {
  render() {
    return (
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="mb-4 me-3">Movies</h2>
          <Dropdown className="dropdown ml-4 mt-1">
            <Dropdown.Toggle
              className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{ backgroundColor: "#221f1f" }}
            >
              Genres &nbsp;
            </Dropdown.Toggle>

            <DropdownMenu className="dropdown-menu bg-dark" aria-labelledby="dropdownMenuButton">
              <DropdownItem className="dropdown-item text-white bg-dark" href="#p">
                Comedy
              </DropdownItem>
              <DropdownItem className="dropdown-item text-white bg-dark" href="#p">
                Drama
              </DropdownItem>
              <DropdownItem className="dropdown-item text-white bg-dark" href="#p">
                Thriller
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div>
          <i className="fa fa-th-large icons"></i>
          <i className="fa fa-th icons"></i>
        </div>
      </div>
    );
  }
}

export default Header;
