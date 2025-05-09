import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Notfound(props) {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center vh-100 bg-white px-3">
      <Row className="text-center">
        <Col>
          <p className="text-primary fw-semibold fs-5"> 404</p>
          <h1 className="display-4 fw-semibold text-dark">{props.error}! Page not found</h1>
          <p className="mt-3 fs-5 text-secondary">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/">
              <Button variant="primary">Go back home</Button>
            </Link>
            <Link to="/" className="text-decoration-none fw-semibold text-dark mt-2">
              Contact support <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
