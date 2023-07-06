import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

const UserInfo = () => {
  const [userData, setUserData] = useState({});
  const [reservationData, setReservationData] = useState({});

  useEffect(() => {
    fetch('URL_DEL_ENDPOINT') // Reemplaza 'URL_DEL_ENDPOINT' por la URL correcta de tu API
      .then(response => response.json())
      .then(data => {
        setUserData(data.userData);
        setReservationData(data.reservationData);
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  return (
    <Container style={{ marginTop: '7rem' }}>
      <Row className="d-flex justify-content-center">
        <Col md={8} lg={6} xl={5} className="mb-4">
          <Card className="h-100 shadow">
            <Card.Header as="h5">Reservas</Card.Header>
            <Card.Body>
              <Tab.Container defaultActiveKey="personalInfo">
                <Nav variant="tabs" className="mb-4">
                  <Nav.Item>
                    <Nav.Link eventKey="personalInfo">Información personal</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="reservationInfo">Información de la reserva</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="personalInfo">
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
                  </Tab.Pane>
                  <Tab.Pane eventKey="reservationInfo">
                    <div className="mb-3">
                      <span className="info-label">ID de reserva:</span>
                      <select className="form-select" value={reservationData.idReservation} readOnly>
                        <option value={reservationData.idReservation}>{reservationData.idReservation}</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <span className="info-label">Fecha de llegada:</span>
                      <input className="form-control" type="date" value={reservationData.arrivalDate} readOnly />
                    </div>
                    <div className="mb-3">
                      <span className="info-label">Fecha de salida:</span>
                      <input className="form-control" type="date" value={reservationData.departureDate} readOnly />
                    </div>
                    <div className="mb-3">
                      <span className="info-label">Cantidad de habitaciones:</span>
                      <input className="form-control" type="number" value={reservationData.roomCount} readOnly />
                    </div>
                    <div className="mb-3">
                      <span className="info-label">Número de habitación:</span>
                      <input className="form-control" type="text" value={reservationData.roomNumber} readOnly />
                    </div>
                    <div className="mb-3">
                      <span className="info-label">Número de niños:</span>
                      <input className="form-control" type="number" value={reservationData.childrenCount} readOnly />
                    </div>
                    <div className="mb-3">
                      <span className="info-label">Número de adultos:</span>
                      <input className="form-control" type="number" value={reservationData.adultsCount} readOnly />
                    </div>
                    <div className="mb-3">
                      <span className="info-label">Precio de la habitación:</span>
                      <input className="form-control" type="text" value={reservationData.roomPrice} readOnly />
                    </div>
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

export default UserInfo;
