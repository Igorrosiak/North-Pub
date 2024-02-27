import "./menu-component.scss";
import { Dispatch, ReactElement, SetStateAction, useMemo, useState } from "react";
import { Image, Button } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";
import { GiKnifeFork } from "react-icons/gi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import AliceCarousel, { EventObject } from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { TitleElement } from "../../elements/title/title";
import { ModalElement } from "../../elements/modal/modal";
import burguersMenu from "../../assets/burguers-menu.png";
import burguersImage from "../../assets/burguers-image.jpg";
import portionsAndSnacksMenu from "../../assets/portionsAndSnacks-menu.png";
import portionsAndSnacksImage from "../../assets/portionsAndSnacks-image.jpg";
import choppsAndBeersMenu from "../../assets/beersAndChopps-menu.png";
import choppsAndBeersImage from "../../assets/beersAndChopps-image.jpeg";
import drinksMenu from "../../assets/drinks-menu.png";
import drinksImage from "../../assets/drinks-image.jpg";
import setMealMenu from "../../assets/setMeal-menu.jpg";
import setMealImage from "../../assets/setMeal-image.jpg";
import soupMenu from "../../assets/soup-menu.png";
import soupImage from "../../assets/soup-image.jpg";
import shotsMenu from "../../assets/shots-menu.png";
import shotsImage from "../../assets/shots-image.jpg";
import sodaAndJuiceMenu from "../../assets/sodaAndJuice-menu.png";
import sodaAndJuiceImage from "../../assets/sodaAndJuice-image.png";
import distillatesMenu from "../../assets/distillates-menu.png";
import distillatesImage from "../../assets/distillates-image.jpg";
import combosMenu from "../../assets/combos-menu.png";
import combosImage from "../../assets/combos-image.jpg";
import dessertMenu from "../../assets/desserts-menu.png";
import dessertImage from "../../assets/desserts-image.jpg";

interface menuProps {
  setIsViewingMenu: Dispatch<SetStateAction<boolean>>
}

export function MenuComponent({ setIsViewingMenu }: menuProps): ReactElement {
  const [menuImage, setMenuImage] = useState<string>("");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const menus = useMemo(
    () => [
      {
        name: "Burguer's e Adicionais",
        productImage: burguersImage,
        menuImage: burguersMenu,
      },
      {
        name: "Porções e Petiscos",
        productImage: portionsAndSnacksImage,
        menuImage: portionsAndSnacksMenu,
      },
      {
        name: "Cervejas e Chopp's",
        productImage: choppsAndBeersImage,
        menuImage: choppsAndBeersMenu,
      },
      { name: "Drinks", productImage: drinksImage, menuImage: drinksMenu },
      { name: "Pratos", productImage: setMealImage, menuImage: setMealMenu },
      { name: "Caldos", productImage: soupImage, menuImage: soupMenu },
      { name: "Doses", productImage: shotsImage, menuImage: shotsMenu },
      {
        name: "Refrigerantes e Sucos",
        productImage: sodaAndJuiceImage,
        menuImage: sodaAndJuiceMenu,
      },
      {
        name: "Garrafas de Destilados",
        productImage: distillatesImage,
        menuImage: distillatesMenu,
      },
      { name: "Combos", productImage: combosImage, menuImage: combosMenu },
      {
        name: "Sobremesas",
        productImage: dessertImage,
        menuImage: dessertMenu,
      },
    ],
    []
  );

  const menusToCarousel = menus.map((menu) => (
    <div className="menu-item h-100 p-0" key={menu.name}>
      <div className="menu-informations position-absolute flex-column align-items-center">
        <h3 className="m-auto px-4 text-center">{menu.name}</h3>
        <Button
          className="color-title bg-subtitle w-75 text-center border-0 mb-4"
          onClick={() => {
            setMenuImage(menu.menuImage);
            setModalIsOpen(true);
            setIsViewingMenu(true)
          }}
        >
          Ver mais
        </Button>
      </div>
      <Image src={menu.productImage} className="menu-image w-100 h-100" />
    </div>
  ));

  const responsive = {
    0: { items: 2 },
    650: { items: 3 },
    992: { items: 4 },
  };

  return (
    <div
      id="menu"
      className="menu-component w-100 pt-5 d-flex flex-column justify-content-center align-items-start"
    >
      <div className="w-50 m-auto d-flex justify-content-between responsive-component">
        <TitleElement
          icon={<GiKnifeFork />}
          title="Cardápio"
          subtitle="Faça sua escolha"
        />
        <BiLinkExternal
          size={43}
          className="icon-link color-title"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1IB6n7_RQst8jKTUW3B2Z1PU3fOB5DNI4/view?usp=sharing",
              "_blank"
            )
          }
        />
      </div>
      <div className="w-100 mt-3">
        <AliceCarousel
          infinite
          mouseTracking
          disableDotsControls
          items={menusToCarousel}
          onSlideChanged={(e: EventObject) => setActiveIndex(e.item)}
          responsive={responsive}
          activeIndex={activeIndex}
          controlsStrategy="responsive"
          renderPrevButton={() => {
            return (
              <MdKeyboardArrowLeft
                size={80}
                className="position-absolute control-arrow-right"
              />
            );
          }}
          renderNextButton={() => {
            return (
              <MdKeyboardArrowRight
                size={80}
                className="position-absolute control-arrow-left"
              />
            );
          }}
        />
      </div>
      <ModalElement
        isOpen={modalIsOpen}
        closeModal={() => setModalIsOpen(false)}
        image={menuImage}
        setIsViewingMenu={setIsViewingMenu}
      />
    </div>
  );
}
