// SignUp.js
import React, { Component } from 'react';
import HumanTest from './HumanTest';
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
                  pattern="[a-z]{1,15}"
                  title="El nombre sólo puede contener letras minúsculas, por ejemplo, john martinez"
                  required
                />
              </div>
              <div className="mb-3">
                <input type="number" className="form-control" placeholder="Número de documento" maxLength="50" required />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Correo electrónico" required />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  title="La contraseña debe contener mínimo 6 caracteres, 1 mayúscula, 1 minúscula y 1 número o carácter especial"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirmar contraseña"
                  pattern="(?=^.{6,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
                  title="La contraseña debe contener mínimo 6 caracteres, 1 mayúscula, 1 minúscula y 1 número o carácter especial"
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
                ¿Ya estás registrado? <a href="/iniciar-sesion">Inicia sesión</a>
              </p>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
