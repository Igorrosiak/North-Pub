import { Dispatch, SetStateAction } from "react";
import "./modal.scss";
import { Image } from "react-bootstrap";
import { AiOutlineClose } from "react-icons/ai";

interface modalParams {
  isOpen: boolean;
  closeModal: () => void;
  image: string;
  setIsViewingMenu: Dispatch<SetStateAction<boolean>>;
}

export const ModalElement = ({
  isOpen,
  closeModal,
  image,
  setIsViewingMenu,
}: modalParams) => {
  if (isOpen) {
    return (
      <div className="modal-background position-fixed">
        <AiOutlineClose
          size={50}
          className="close-button position-absolute text-light"
          onClick={() => {
            closeModal();
            setIsViewingMenu(false);
          }}
        />
        <div className={`modal-container position-fixed`}>
          <Image src={image} className="h-100 w-100 rounded-5" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};
