import "./whatsapp-component.scss";
import { ReactElement } from "react";
import whatsAppIcon from "../../assets/whatsapp-icon.svg";

interface whatsappProps {
  isViewingMenu: boolean;
}

export function WhatsAppComponent({
  isViewingMenu,
}: whatsappProps): ReactElement {
  return (
    <div className="whatsapp-component position-fixed d-flex flex-column-reverse text-center">
      {isViewingMenu ? (
        ""
      ) : (
        <img
          src={whatsAppIcon}
          alt="WhatsApp-Icon"
          className="whatsapp-icon"
          onClick={() => window.open("https://wa.me/555182470401", "_blank")}
        />
      )}
    </div>
  );
}
