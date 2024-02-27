import "./welcome-component.scss";
import { ReactElement } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { TitleElement } from "../../elements/title/title";

export function WelcomeComponent(): ReactElement {
  return (
    <div
      id="welcome"
      className="welcome-component responsive-component m-auto w-50 pt-5 d-flex flex-column justify-content-center align-items-start"
    >
      <TitleElement
        icon={<ImQuotesLeft />}
        title="Olá!"
        subtitle="Seja bem-vindo"
      />
      <h5 className="fw-light text-justify mt-3">
        Nós somos o North Pub Canasvieiras! Estamos localizados na Av. das
        Nações, nº 675. Oferecemos um local aconchegante com música ao vivo,
        lanches, petiscos, chopp e cerveja gelada, drinks saborosos e muita
        gente bonita. Você que gosta de música sertaneja aqui é o lugar!
      </h5>
    </div>
  );
}
