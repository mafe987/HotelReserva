import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';

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
    roomPrice: '',
  });

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('URL_DEL_ENDPOINT') // Reemplaza 'URL_DEL_ENDPOINT' por la URL correcta de tu API para obtener la información de las habitaciones
      .then(response => response.json())
      .then(data => {
        setRooms(data.rooms);
      })
      .catch(error => {
        console.error('Error al obtener los datos de las habitaciones:', error);
      });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservationData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('URL_DEL_ENDPOINT', { // Reemplaza 'URL_DEL_ENDPOINT' por la URL correcta de tu API para enviar la reserva
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(reservationData)
    })
      .then(response => {
        if (response.ok) {
          console.log('Reserva enviada exitosamente');
          // Aquí puedes realizar alguna acción adicional después de enviar la reserva exitosamente, como mostrar un mensaje de confirmación o redirigir al usuario a otra página.
        } else {
          console.error('Error al enviar la reserva');
          // Aquí puedes manejar el error en caso de que la solicitud de reserva falle, como mostrar un mensaje de error al usuario.
        }
      })
      .catch(error => {
        console.error('Error al enviar la reserva:', error);
        // Aquí puedes manejar el error en caso de que ocurra un error de red u otro tipo de error en la solicitud de reserva.
      });
  };

  return (
    <div className="container" style={{ marginTop: '7rem' }}>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} xl={4}>
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

                {/* ... (Resto del código del formulario) ... */}

                <Form.Group controlId="adultsCount">
                  <Form.Label>Cantidad de adultos</Form.Label>
                  <Form.Control
                    type="number"
                    name="adultsCount"
                    value={reservationData.adultsCount}
                    onChange={handleChange}
                    min="1"
                    required
                  />
                </Form.Group>

                <div className="mb-3">
                  <span className="info-label">Precio de la habitación:</span>
                  <input className="formcontrol" type="text" value={reservationData.roomPrice} readOnly />
                </div>

                <Button variant="primary" type="submit">
                  Reservar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReservationForm;
