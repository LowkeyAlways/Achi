import React from 'react'
import { Link } from 'react-router-dom'
import Col from 'react-bootstrap/Col';

function Footer() {
  return (
    <div className="d-flex footer">
        <Col className="d-flex justify-content-center">
            <Link onClick={() => {window.location.href="/"}}><p className="me-2 contacts">Contacts</p></Link>
            <Link onClick={() => {window.location.href="/"}}><p className="px-2 mentions">Mentions légales</p></Link>
        </Col>
        <Col className="d-flex justify-content-center">
            <p>&#169; ACHI - All Rights Reserved.</p>
        </Col>
    </div>
  )
}

export default Footer