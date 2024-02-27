import "./home-page.scss"
import { useState } from "react";
import { HeaderComponent } from "../components/header/header-component";
import { HomeComponent } from "../components/home/home-component";
import { WelcomeComponent } from "../components/welcome/welcome-component";
import { WhatsAppComponent } from "../components/whatsapp/whatsapp-component";
import { MenuComponent } from "../components/menu/menu-component";
import { ReviewsComponent } from "../components/reviews/reviews-component";
import { LocationComponent } from "../components/location/location-component";
import { FooterComponent } from "../components/footer/footer-component";
import { IfoodComponent } from "../components/ifood/ifood-component";

export function HomePage() {
  const [isViewingMenu, setIsViewingMenu] = useState(false)

  return (
    <main className="home-page">
      <div className="image-background">
        <HeaderComponent />
        <HomeComponent />
      </div>
      <WhatsAppComponent isViewingMenu={isViewingMenu} />
      <WelcomeComponent />
      <MenuComponent setIsViewingMenu={setIsViewingMenu} />
      <ReviewsComponent />
      <LocationComponent />
      <IfoodComponent />
      <FooterComponent />
    </main>
  );
}
