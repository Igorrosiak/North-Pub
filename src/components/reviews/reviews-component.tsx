import "./reviews-component.scss";
import { ReactElement } from "react";
import { Col } from "react-bootstrap";
import { AiFillStar } from "react-icons/ai";
import { TitleElement } from "../../elements/title/title";
import julianaImage from "../../assets/image-review-1.png";
import eduardoImage from "../../assets/image-review-3.png";
import edineiaImage from "../../assets/image-review-2.png";
import priImage from "../../assets/image-review-4.png";
import christopherImage from "../../assets/image-review-5.png";
import lucreciaImage from "../../assets/image-review-6.png";

export function ReviewsComponent(): ReactElement {
  let reviews = [
    {
      name: "Juliana Martins",
      image: julianaImage,
      value: 5,
      description:
        "Literalmente melhor bar de canasvieras, atendimento incrível, preço ótimo, até às 21:00 geralmente tem promoções de chopp+ hambúrguer, indico de olhos fechados a quem estiver passando por canasvieras, inclusive salvou minha viagem esse lugar",
    },
    {
      name: "Eduardo Moreno",
      image: eduardoImage,
      value: 4,
      description: "Comida boa, barata e as porções são enormes",
    },
    {
      name: "Edineia Jesus",
      image: edineiaImage,
      value: 5,
      description: "Adorei fui bem atendido",
    },
    {
      name: "Pri Menezes",
      image: priImage,
      value: 5,
      description:
        "Fui super bem atendida. Bom hambúrguer e cerveja bem gelada, música boa. Recomendo.",
    },
    {
      name: "Christopher Pezotti",
      image: christopherImage,
      value: 5,
      description:
        "Lugar muito agradável e atendimento excelente. A comida estava ótima,  e o Chopp bem gelado, do jeito que eu gosto. Se estiver passando por aqui, super recomendo.",
    },
    {
      name: "Lucrecia Navarra Ferrari",
      image: lucreciaImage,
      value: 4,
      description:
        "Muito boa opção para comer em Canasvieiras. Boa atenção, rápido.",
    },
  ];

  function renderStars({value}: {value: number}) {
    const stars = []
    for (let index = 0; index < 5; index++) {
      if(value > index){
        stars.push(<AiFillStar size={27} />)
      } else{
        stars.push(<AiFillStar size={27} className="text-muted" />)
      }
    }
    return stars
  }

  return (
    <div
      id="reviews"
      className="reviews-component responsive-component m-auto w-50 pt-5 d-flex flex-column justify-content-center align-items-start"
    >
      <TitleElement
        icon={<AiFillStar />}
        title="Avaliações"
        subtitle="Suas opiniões"
      />

      <Col className="w-100 mt-2 px-0 d-flex flex-column justify-content-center align-items-start">
        {reviews.map((review) => {
          return (
            <Col className="review bg-review p-3 mt-3 d-flex justify-content-start align-items-center rounded-2">
              <img src={review.image} alt="#" className="rounded-circle" />
              <div className="d-flex flex-column ml-3">
                <div className="color-title">
                  {renderStars({value: review.value}).map(star => star)}
                </div>
                <p className="fw-light color-subtitle pt-1 m-0">{review.description}</p>
              </div>
            </Col>
          );
        })}
      </Col>
    </div>
  );
}
