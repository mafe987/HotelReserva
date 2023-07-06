import React, { Component } from 'react';
import HumanTest from './HumanTest.component';
import image from '../images/image-login.png';
import Card from 'react-bootstrap/Card';

export default class Login extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const { isAnswerCorrect } = this.props;

    // Verificar las validaciones y realizar las acciones correspondientes
    // ...

    // Ejemplo de redirección a una página después del inicio de sesión
    // this.props.history.push('/dashboard');
  }

  render() {
    const { isAnswerCorrect } = this.props;

    return (
      <div className="d-flex justify-content-center">
        <Card style={{ maxWidth: '400px', marginTop: '5rem' }}>
          <Card.Body>
            <Card.Title className="text-center">Inicio de sesión</Card.Title>
            <div className="text-center mb-3">
              <img src={image} className="center" alt="Imagen de inicio de sesión" />
            </div>
            <form onSubmit={this.handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  required
                />
              </div>
              <div className="mb-3">
                <HumanTest isAnswerCorrect={isAnswerCorrect} />
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