import { Nav, Container, Navbar } from "react-bootstrap";

export function HeaderComponent() {
  const menuItems = document.querySelectorAll(".navbar-nav a");

  menuItems.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
  });

  //@ts-ignore
  function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);
    scrollToPosition(to);
  }

  //@ts-ignore
  function getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
  }

  //@ts-ignore
  function scrollToPosition(to) {
    smoothScrollTo(0, to);
  }

  //@ts-ignore
  function smoothScrollTo(endX, endY, duration = 600) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 400;

    //@ts-ignore
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1)
        return (distance / 2) * time * time * time * time + from;
      return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  }

  return (
    <Navbar expand="lg" className="header-component pt-3 bg-body-tertiary">
      <Container className="text-light">
        <Navbar.Toggle
          className="bg-light ml-3"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav" className="ml-3 mt-2">
          <Nav className="me-auto m-auto gap-3">
            <Nav.Link href="#welcome" className="text-light">
              Inicio
            </Nav.Link>
            <Nav.Link href="#menu" className="text-light">
              Cardápio
            </Nav.Link>
            <Nav.Link href="#reviews" className="text-light">
              Avaliações
            </Nav.Link>
            <Nav.Link href="#location" className="text-light">
              Localização
            </Nav.Link>
            <Nav.Link href="#ifood" className="text-light">
              Ifood
            </Nav.Link>
            <Nav.Link href="#contact" className="text-light">
              Contato
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
