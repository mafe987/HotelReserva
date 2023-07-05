import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import image from '../images/image-login.png';
import Card from 'react-bootstrap/Card';

export default class SignUp extends Component {
  handleSubmit = async (event) => {
    event.preventDefault();

    // Obtener los datos del formulario
    const name = event.target.name.value;
    const documentNumber = event.target.documentNumber.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Enviar los datos al servidor
    try {
      const response = await fetch('URL_DEL_ENDPOINT_DE_REGISTRO', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, documentNumber, email, password })
      });

      if (response.ok) {
        // Manejar la respuesta exitosa del servidor
        console.log('Registro exitoso');
        // Redirigir a la página de registro exitoso
        // this.props.history.push('/success');
      } else {
        // Manejar la respuesta de error del servidor
        console.log('Error en el registro');
      }
    } catch (error) {
      // Manejar errores de conexión o errores inesperados
      console.log('Error en el registro', error);
    }
  };

  render() {
    return (
      <div className="d-flex justify-content-center">
        <Card style={{ marginTop: '7rem', maxWidth: '400px' }}>
          <Card.Body>
            <Card.Title className="text-center">Registro en Hotel Casa Real</Card.Title>
            <div className="text-center mb-3">
              <img src={image} className="center" alt="Imagen de registro" />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre completo"
                  maxLength="50"
                  pattern="^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$"
                  title="El nombre sólo puede contener letras, por ejemplo, Daniel Hurtado"
                  name="name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Número de documento"
                  maxLength="10"
                  name="documentNumber"
                  required
                />
              </div>
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
                  pattern="(?=^.{8,}$)"
                  title="La contraseña debe contener mínimo 8 caracteres"
                  name="password"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirmar contraseña"
                  pattern="(?=^.{8,}$)"
                  title="La contraseña debe contener mínimo 8 caracteres"
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Registrarse
                </button>
              </div>
              <p className="forgot-password text-right">
                ¿Yaestás registrado? <Link to="/iniciar-sesion">Inicia sesión</Link>
              </p>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
