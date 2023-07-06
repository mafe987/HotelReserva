import React, { useState, useEffect } from 'react';
import { Card, Container, Row, Col, Tab, Nav } from 'react-bootstrap';

const AdminInfo = () => {
  const [userData, setUserData] = useState(null);
  const [reservationData, setReservationData] = useState(null);

  useEffect(() => {
    fetch('URL_DEL_ENDPOINT') // Reemplaza 'URL_DEL_ENDPOINT' por la URL correcta de tu API para obtener la información del usuario y la reserva
      .then(response => response.json())
      .then(data => {
        setUserData(data.userData);
        setReservationData(data.reservationData);
      })
      .catch(error => {
        console.error('Error al obtener los datos del usuario y la reserva:', error);
      });
  }, []);

  return (
    <Container style={{ marginTop: '7rem' }}>
      <Row className="justify-content-center">
        <Col md={6} className="mb-4">
          <Card className="shadow">
            <Card.Body>
              <Tab.Container defaultActiveKey="personalInfo">
                <Nav variant="tabs" className="mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="personalInfo">Información personal</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="personalInfo">
                    {userData && (
                      <div>
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
                      </div>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminInfo;
