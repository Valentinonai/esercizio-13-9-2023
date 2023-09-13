import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import photo from "../philip-oroni-5xIobCDJS34-unsplash.jpg";
class Profile extends Component {
  render() {
    return (
      <Container className=" ">
        <div>
          <h1 className="display-3 text-white">Edit Profile</h1>
        </div>
        <Row className="align-items-start">
          <Col md={3} className=" mt-3 d-none d-md-block">
            <div style={{ position: "relative" }}>
              <img src={photo} alt="profileImg" width="100%" />
              <div className="edit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="currentColor"
                  className="bi bi-pencil-fill"
                  viewBox="0 0 16 16"
                  style={{ color: "white" }}
                >
                  <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                </svg>
              </div>
            </div>
          </Col>
          <Col xs={12} md={9} className=" dati">
            <div className="mt-4 fs-5">
              <span>Strive Student</span>
            </div>
            <label htmlFor="language" className="d-block mt-4 mb-2">
              Language:
            </label>

            <select name="language" id="language">
              <option value="">--Please choose an option--</option>
              <option value="Italian">Italian</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="Franch">Franch</option>
              <option value="German">German</option>
            </select>
            <hr />
            <p className="fs-5">Maturity Settings:</p>
            <div>ALL MATURITY RATINGS</div>
            <p className="text-info my-3">Show titles of all maturity ratings for this profile.</p>
            <button type="button" className="btn mb-4 text-white">
              EDIT
            </button>
            <hr />
            <p className="fs-5">AutoplayControls</p>

            <label className="checkbox-wrapper">
              Autoplay next episode in a series on all devices.
              <br />
              <input type="checkbox" name="check" />
              <span className="checkmark"></span>
            </label>
            <label className="checkbox-wrapper">
              Autoplay previews while browsing on all devices.
              <br />
              <input type="checkbox" name="check" />
              <span className="checkmark"></span>
            </label>
          </Col>
          <hr className="mt-4" />
        </Row>
        <div className="py-4 rowButton">
          <button type="button" className="btn btn-light me-3 px-4 my-2">
            <a href="#p">SAVE</a>
          </button>

          <button type="button " className="btn btn-dark btnPL me-3 px-4 my-2" style={{ borderColor: "gray" }}>
            <a href="#p">CANCEL</a>
          </button>

          <button type="button " className="btn btn-dark btnPL me-3 px-4 my-2" style={{ borderColor: "gray" }}>
            <a href="#p">DELETE PROFILE</a>
          </button>
        </div>
      </Container>
    );
  }
}
export default Profile;
