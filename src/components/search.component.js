import React, { useState } from 'react';
import { Form, FormControl, Button, Alert } from 'react-bootstrap';

const Reservas = () => {
  const [arrival, setArrival] = useState('');
  const [departure, setDeparture] = useState('');
  const [guests, setGuests] = useState(0);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);
  const [arrivalError, setArrivalError] = useState('');
  const [departureError, setDepartureError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación de fechas
    const currentDate = new Date();
    const selectedArrival = new Date(arrival);
    const selectedDeparture = new Date(departure);

    if (selectedArrival < currentDate || selectedArrival.getTime() === currentDate.getTime()) {
      setArrivalError('La fecha de llegada debe ser mayor a la fecha actual');
      return;
    } else {
      setArrivalError('');
    }

    if (selectedDeparture < selectedArrival) {
      setDepartureError('La fecha de salida debe ser igual o mayor a la fecha de llegada');
      return;
    } else {
      setDepartureError('');
    }

    // Reiniciar los estados de error
    setArrivalError('');
    setDepartureError('');

    setSubmitting(true);

    try {
      // Construir el objeto JSON para enviar en la solicitud
      const reservationData = {
        arrival: selectedArrival.toISOString(),
        departure: selectedDeparture.toISOString(),
        guests: parseInt(guests),
        children: parseInt(children),
        room: parseInt(room),
      };

      // Realizar la solicitud con fetch
      const response = await fetch('URL_DEL_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (response.ok) {
        // La solicitud se realizó correctamente
        console.log('Solicitud enviada');
        // Aquí puedes realizar las acciones correspondientes al éxito de la solicitud
      } else {
        // Hubo un error en la solicitud
        console.error('Error al enviar la solicitud:', response.statusText);
        // Aquí puedes realizar las acciones correspondientes al error de la solicitud
      }
    } catch (error) {
      // Hubo un error en la solicitud
      console.error('Error al enviar la solicitud:', error);
      // Aquí puedes realizar las acciones correspondientes al error de la solicitud
    }

    setSubmitting(false);
  };

  return (
    <div className="home-card d-flex align-items-center justify-content-center" style={{ marginTop: '5rem' ,marginLeft: '2em', marginRight: '2em'}}>
      <div className="home-form-container">
        <Form className="home-form" onSubmit={handleSubmit}>
          <Form.Group controlId="arrival">
            <Form.Label>Llegada</Form.Label>
            <FormControl
              type="datetime-local"
              value={arrival}
              onChange={(e) => setArrival(e.target.value)}
              required
              min={new Date().toISOString().slice(0, 16)}
            />
            {arrivalError && <Alert variant="danger">{arrivalError}</Alert>}
          </Form.Group>
          <Form.Group controlId="departure">
            <Form.Label>Salida</Form.Label>
            <FormControl
              type="datetime-local"
              value={departure}
              onChange={(e) => setDeparture(e.target.value)}
              required
              min={arrival}
            />
            {departureError && <Alert variant="danger">{departureError}</Alert>}
          </Form.Group>
          <Form.Group controlId="guests">
            <Form.Label>Adultos</Form.Label>
            <FormControl
              type="number"
              min="1"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="children">
            <Form.Label>Niños</Form.Label>
            <FormControl
              type="number"
              min="0"
              value={children}
              onChange={(e) => setChildren(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="room">
            <Form.Label>Habitación</Form.Label>
            <FormControl
              type="number"
              min="1"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              required
            />
          </Form.Group>
          <div className="search-button-container">
            <Button variant="primary" type="submit" disabled={submitting}>
              {submitting ? 'Enviando...' : 'Buscar'}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Reservas;
