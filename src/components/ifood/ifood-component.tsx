import "./ifood-component.scss";
import { ReactElement } from "react";
import { Image } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";
import { SiIfood } from "react-icons/si";
import { TitleElement } from "../../elements/title/title";
import iFoodImage from "../../assets/ifood-image.png";

export function IfoodComponent(): ReactElement {
  return (
    <div
      id="ifood"
      className="ifood-component responsive-component m-auto w-50 pt-5 d-flex flex-column justify-content-center align-items-start"
    >
      <div className="d-flex justify-content-between w-100">
        <TitleElement
          icon={<SiIfood />}
          title="iFood"
          subtitle="Peça do conforto da sua casa!"
        />

        <BiLinkExternal
          size={43}
          className="icon-link color-title"
          onClick={() =>
            window.open(
              "https://www.ifood.com.br/delivery/florianopolis-sc/north-pub-canasvieiras/96b07260-2e44-425b-9fe2-6589be274165?utm_medium=share",
              "_blank"
            )
          }
        />
      </div>

      <Image src={iFoodImage} className="w-100 mx-auto mt-4" />
    </div>
  );
}
