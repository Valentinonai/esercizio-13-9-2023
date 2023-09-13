import { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class Settings extends Component {
  render() {
    return (
      <Container fluid="md" className=" mb-5 ps-5" id="SettingsContainer" style={{ color: "white" }}>
        <h1 className="mt-5 mb-3 fw-normal text-white">Account</h1>
        <hr />
        <Row className=" justify-content-between resize">
          <Col xs={4}>
            <h4>MEMBERSHIP & BILLING</h4>
            <button type="button" className="btn d-none d-md-block bg-secondary" id="btnProfile">
              Cancel Membership
            </button>
            <button type="button" className="btn d-block d-md-none bg-secondary" id="btnProfile2">
              <i className="bi bi-trash3"></i>
            </button>
          </Col>
          <Col xs={8}>
            <div className="d-flex justify-content-between resize">
              <p className="text-white">student@strive.school</p>
              <a href="#p">Change account email</a>
            </div>
            <div className="d-flex justify-content-between resize">
              <p>Password: **********</p>
              <a href="#p">Change password</a>
            </div>
            <div className="d-flex justify-content-between resize">
              <p>Phone: 333333333333333</p>
              <a href="#p">Change phone number</a>
            </div>
            <hr />
            <div className="d-flex justify-content-between resize">
              <p className="text-white">
                <i className="bi bi-paypal"></i> admin@strive.school
              </p>
              <a href="#p">Update payment info</a>
            </div>
            <div className="d-flex justify-content-end resize">
              <a href="#p">Billing details</a>
            </div>
            <hr />
            <div className="d-flex justify-content-end resize">
              <a href="#p">Redeem gift card or promo code</a>
            </div>
            <div className="d-flex justify-content-end resize">
              <a href="#p">where to buy gift cards</a>
            </div>
            <br />
          </Col>
          <hr />
          <Row className="justify-content-between resize">
            <Col xs={4}>
              <h4>PLAN DETAILS</h4>
            </Col>
            <Col xs={8}>
              <div className="d-flex justify-content-between resize">
                <p className="text-white">
                  Premium <i className="bi bi-badge-hd-fill"></i>
                </p>
                <a href="#p">Change plan</a>
              </div>
              <br />
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-between resize">
            <Col xs={4}>
              <h4>SETTINGS</h4>
            </Col>
            <Col xs={8}>
              <a href="#p">Parental control</a>
              <br />
              <a href="#p">Test participation</a>
              <br />
              <a href="#p">Manage download devices</a>
              <br />
              <a href="#p">Activate a device</a>
              <br />
              <a href="#p">Recent device streaming activity</a>
              <br />
              <a href="#p">
                Sign out of all devices <br />
              </a>
              <br />
            </Col>
            <br />
          </Row>
          <hr />
          <Row className=" justify-content-between resize">
            <Col xs={4}>
              <h4>MY PROFILE</h4>
            </Col>
            <Col xs={8}>
              <div className="d-flex justify-content-between resize">
                <p className="m-e-auto text-white">
                  <i className="bi bi-person-square"></i> Strive Student
                </p>

                <div className="d-flex flex-column">
                  <a href="#p">Manage profiles</a>
                  <a href="#p">Add profile email</a>
                </div>
              </div>
              <br />
              <div className="d-flex resize resize">
                <div style={{ marginRight: "40%" }}>
                  <a href="#p">Language</a>
                  <br />
                  <a href="#p">Playback settings</a>
                  <br />
                  <a href="#p">Subtitle appearance</a>
                </div>
                <div>
                  <a href="#p">Viewing activity</a>
                  <br />
                  <a href="#p">Ratings</a>
                </div>
              </div>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default Settings;
