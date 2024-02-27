import "./footer-component.scss"
import { ReactElement } from "react";
import logoNorthPub from "../../assets/logo-pub-white.png"
import { SiGooglechrome, SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si"

export function FooterComponent(): ReactElement {
  return (
      <footer id="contact" className="footer-component mt-5 pt-3 d-flex flex-column text-center">
        <hr />
        <img src={logoNorthPub} alt="Logo North Pub" className="m-auto my-4" />
        <div>
          <h4 className="font-weight-normal">Horário de Funcionamento</h4>
          <p className="mb-0 font-weight-normal">Segunda à Sábado: 18:00 às 01:00</p>
          <p className="font-weight-normal">Domingo: 15:00 às 22:00</p>
          <div className="social-icons">
            <a href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0LDA0SI7PMDMyYLRSNaiwNDUyNzE2NE9MtkyzNDJOsTKoMElNSzZMNTc1Sk1LNEw1NfESy8svKslQKChNUkhOzEssLstMzSxKLAYASpYXkw&q=north+pub+canasvieiras&oq=north+pub+canasvieiras&aqs=chrome.1.69i57j46i39i175i199i650j69i59j0i512l2j69i60l3.7839j0j7&sourceid=chrome&ie=UTF-8" target="_blank" rel="noreferrer">
              <SiGooglechrome />
            </a>
            <a href="https://www.instagram.com/northpubcanasvieiras/" target="_blank" rel="noreferrer">
              <SiInstagram />
            </a>
            <a href="https://pt-br.facebook.com/northpubcanasvieiras" target="_blank" rel="noreferrer">
              <SiFacebook />
            </a>
            <a href="https://wa.me/555182470401" target="_blank" rel="noreferrer">
              <SiWhatsapp />
            </a>
          </div>
        </div>
        <hr />
        <p className="px-5">Copyright © North Pub Canasvieiras. 2023 All rights reserved</p>
      </footer>
  );
}

// SEGUNDA A SABADO 18 ÀS 01
// DOMINGO DAS 15 ÀS 22