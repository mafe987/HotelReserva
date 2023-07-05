import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { GrFacebook } from 'react-icons/gr';
import { BsFillEnvelopeFill, BsFillTelephoneFill, BsFillHouseFill, BsInstagram, BsGoogle } from 'react-icons/bs';

function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Conéctate con nosotros en las redes sociales:</span>
        </div>

        <div>
          <a href="#" className="me-4 text-reset">
            <GrFacebook />
          </a>
          <a href="#" className="me-4 text-reset">
            <BsGoogle />
          </a>
          <a href="#" className="me-4 text-reset">
            <BsInstagram />
          </a>
        </div>
      </section>

      <section>
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Hotel Casa Real
              </h6>
              <p>
                Día a día construimos nuevas experiencias para ofrecerte el servicio que mereces. Estamos ubicados en
                Villavicencio. Te invitamos a que disfrutes de este espacio lleno de valores y buenas energías.
              </p>
            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Enlaces útiles</h6>
              <p>
                <a href="/SiteMap" className="text-reset">
                  Mapa de sitio
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  #############
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  #############
                </a>
              </p>
              <p>
                <a href="#" className="text-reset">
                  #############
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contáctanos</h6>
              <p>
                <BsFillHouseFill />
                Colombia, Villavicencio-Meta
              </p>
              <p>
                <BsFillEnvelopeFill />
                HotelCasaReal@gmail.com
              </p>
              <p>
                <BsFillTelephoneFill /> +57 310 345 6789
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Hotel Casa Real
      </div>
    </MDBFooter>
  );
}

export default Footer;
