import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

import data from '../data/user.json'; // Importa el archivo JSON

const UserInfo = () => {
  const userData = data.userData;
  const reservationData = data.reservationData;

  return (
    <Container style={{ marginTop: '7rem' }}>
      <Row className="justify-content-center">
        <Col md={6} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Body>
                <Nav variant="tabs" className="mb-4">
                  <Nav.Item>
                    <Nav eventKey="personalInfo">Información personal</Nav>
                  </Nav.Item>
                </Nav>
                    <div className="mb-3">
                      <span className="info-label">Nombre:</span>
                      <input className="form-control" type="text" value={userData.name} readOnly />
                    </div>
                    <div className="mb-3">
                      <span className="info-label">Número de documento:</span>
                      <input className="form-control" type="text" value={userData.documentNumber} readOnly />
                    </div>
                    <div className="mb-3">
                      <span className="info-label">Correo electrónico:</span>
                      <input className="form-control" type="email" value={userData.email} readOnly />
                    </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfo;
