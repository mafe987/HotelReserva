import React, { Component } from 'react';
import HumanTest from './HumanTest.component';
import image from '../images/image-login.png';
import Card from 'react-bootstrap/Card';

export default class SignUp extends Component {
  render() {
    return (
      <div className="d-flex justify-content-center">
        <Card style={{ maxWidth: '400px', marginTop: '5rem' }}>
          <Card.Body>
            <Card.Title className="text-center">Registro en Hotel Casa Real</Card.Title>
            <div className="text-center mb-3">
              <img src={image} className="center" alt="Imagen de registro" />
            </div>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre completo"
                  maxLength="50"
                  pattern="^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$"
                  title="El nombre sólo puede contener letras,por ejemplo, Daniel Hurtado"
                  required
                />
              </div>
              <div className="mb-3">
                <input type="number" className="form-control" placeholder="Número de documento" maxLength="10" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Correo electrónico" required />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  pattern="(?=^.{8,}$)"
                  title="La contraseña debe contener mínimo 8 caracteres"
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
              <div className="mb-3">
                <HumanTest isAnswerCorrect={false} />
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Registrarse
                </button>
              </div>
              <p className="forgot-password text-right">
                ¿Ya estás registrado? <a href="/login">Inicia sesión</a>
              </p>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}