import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo1.png";
import navIcon1 from "../assets/img/nav-icon1.png";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={20} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://github.com/Giovana-Manuquian"
                className="footer1"
              >
                <img src={navIcon1} alt="Icon Github" />
              </a>
              <a
                href="https://www.linkedin.com/in/giovana-manuquian-a4829a188/"
                className="footer2"
              >
                <img src={navIcon2} alt="Icon Linkedin" />
              </a>
              <a
                href="mailto:gmanuquian@gmail.com?subject=&body="
                className="footer3"
              >
                <img src={navIcon3} alt="Icon Email" />
              </a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
