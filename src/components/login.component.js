// Login.js
import React, { Component } from 'react';
import image from '../images/image-login.png';
import Card from 'react-bootstrap/Card';

export default class Login extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    // Obtener los datos del formulario
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Enviar los datos al servidor
    try {
      const response = await fetch('URL_DEL_ENDPOINT_DE_LOGIN', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        // Manejar la respuesta exitosa del servidor
        console.log('Inicio de sesión exitoso');
        // Redirigir a la página de inicio de sesión exitosa
        // this.props.history.push('/dashboard');
      } else {
        // Manejar la respuesta de error del servidor
        console.log('Error en el inicio de sesión');
      }
    } catch (error) {
      // Manejar errores de conexión o errores inesperados
      console.log('Error en el inicio de sesión', error);
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Card style={{ maxWidth: '400px', marginTop: '7rem' }}>
          <Card.Body>
            <Card.Title className="text-center">Inicio de sesión</Card.Title>
            <div className="text-center mb-3">
              <img src={image} className="center" alt="" />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  name="email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  name="password"
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Iniciar sesión
                </button>
              </div>
              <p className="forgot-password text-right">
                <a href="#">¿Olvidaste tu contraseña?</a>
              </p>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}