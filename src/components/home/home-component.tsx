import { ReactElement } from "react";
import logoPub from "../../assets/logo-pub-white.png"
import "./home-component.scss"

export function HomeComponent(): ReactElement {
  return (
      <div className="card-home w-100 d-flex flex-column justify-content-center align-items-center pb-5">
        <img src={logoPub} alt="Logo North Pub" className="w-25 mx-auto pb-4" />
        <h2 className="text-light text-center px-5 pb-5">O Pub mais sertanejo da ilha!</h2>
      </div>
  );
}