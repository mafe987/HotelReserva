import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const ReservationForm = () => {
  const [reservationData, setReservationData] = useState({
    name: '',
    documentNumber: '',
    email: '',
    arrivalDate: '',
    departureDate: '',
    roomCount: '',
    roomNumber: '',
    childrenCount: '',
    adultsCount: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos de reserva
    console.log(reservationData);
  };

  return (
    <div style={{ marginTop: '7em', marginLeft: '30em', maxWidth: '400px' , marginBottom: '3em' }}>
      <Card>
        <Card.Header as="h5">Reservas</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={reservationData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="documentNumber">
              <Form.Label>Número de documento</Form.Label>
              <Form.Control
                type="text"
                name="documentNumber"
                value={reservationData.documentNumber}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={reservationData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="arrivalDate">
              <Form.Label>Fecha de llegada</Form.Label>
              <Form.Control
                type="date"
                name="arrivalDate"
                value={reservationData.arrivalDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="departureDate">
              <Form.Label>Fecha de salida</Form.Label>
              <Form.Control
                type="date"
                name="departureDate"
                value={reservationData.departureDate}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="roomCount">
              <Form.Label>Cantidad de habitaciones</Form.Label>
              <Form.Control
                type="number"
                name="roomCount"
                value={reservationData.roomCount}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="roomNumber">
              <Form.Label>Número de habitación</Form.Label>
              <Form.Control
                type="text"
                name="roomNumber"
                value={reservationData.roomNumber}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="childrenCount">
              <Form.Label>Cantidad de niños</Form.Label>
              <Form.Control
                type="number"
                name="childrenCount"
                value={reservationData.childrenCount}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="adultsCount">
              <Form.Label>Cantidad de adultos</Form.Label>
              <Form.Control
                type="number"
                name="adultsCount"
                value={reservationData.adultsCount}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Reservar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReservationForm;
