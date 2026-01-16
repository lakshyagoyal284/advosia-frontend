import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark pt-5 pb-3" style={{ color: '#f0f0f0' }}>
      <Container>
        <Row className="mb-4">
          <Col lg={4} className="mb-4 mb-lg-0">
            <h5 className="mb-3" style={{ color: 'white' }}>Advosia</h5>
            <p className="small" style={{ color: '#cccccc' }}>
              Connecting clients with rigorously vetted legal professionals for
              all your legal needs with confidence and transparency.
            </p>
            <div className="mt-3">
              <a href="#" className="me-3" style={{ color: '#cccccc' }}>
                <FaLinkedin className="fs-5" />
              </a>
              <a href="#" className="me-3" style={{ color: '#cccccc' }}>
                <FaTwitter className="fs-5" />
              </a>
              <a href="#" style={{ color: '#cccccc' }}>
                <FaFacebook className="fs-5" />
              </a>
            </div>
          </Col>

          <Col md={4} lg={2} className="mb-4 mb-md-0">
            <h6 className="text-uppercase mb-3" style={{ color: 'white' }}>For Clients</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/find-lawyer" className="text-decoration-none small" style={{ color: '#cccccc' }}>
                  Find a Lawyer
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/how-it-works" className="text-decoration-none small" style={{ color: '#cccccc' }}>
                  How It Works
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/practice-areas" className="text-decoration-none small" style={{ color: '#cccccc' }}>
                  Practice Areas
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4} lg={2} className="mb-4 mb-md-0">
            <h6 className="text-uppercase mb-3" style={{ color: 'white' }}>For Lawyers</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/join" className="text-decoration-none small" style={{ color: '#cccccc' }}>
                  Join Our Network
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/lawyer-benefits" className="text-decoration-none small" style={{ color: '#cccccc' }}>
                  Benefits
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/resources" className="text-decoration-none small" style={{ color: '#cccccc' }}>
                  Resources
                </Link>
              </li>
            </ul>
          </Col>

          <Col md={4} lg={3}>
            <h6 className="text-uppercase mb-3" style={{ color: 'white' }}>Contact Us</h6>
            <ul className="list-unstyled small" style={{ color: '#cccccc' }}>
              <li className="mb-2 d-flex align-items-start">
                <FaMapMarkerAlt className="mt-1 me-2 flex-shrink-0" />
                <span>500 Legal District, Suite 1200, New York, NY 10013</span>
              </li>
              <li className="mb-2">
                <FaPhone className="me-2" />
                <a href="tel:+12125551234" className="text-decoration-none" style={{ color: '#cccccc' }}>+1 (212) 555-1234</a>
              </li>
              <li>
                <FaEnvelope className="me-2" />
                <a href="mailto:info@advosia.com" className="text-decoration-none" style={{ color: '#cccccc' }}>info@advosia.com</a>
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="border-secondary mt-0 mb-4" />

        <Row className="align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="small mb-0" style={{ color: '#cccccc' }}>
              &copy; {currentYear} Advosia. All rights reserved.
            </p>
          </Col>
          <Col md={6}>
            <div className="text-md-end">
              <Link to="/privacy" className="text-decoration-none small me-3" style={{ color: '#cccccc' }}>
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-decoration-none small me-3" style={{ color: '#cccccc' }}>
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-decoration-none small" style={{ color: '#cccccc' }}>
                Cookie Policy
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;