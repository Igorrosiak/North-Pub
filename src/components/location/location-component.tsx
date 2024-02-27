import "./location-component.scss";
import { ReactElement } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Col } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import { TitleElement } from "../../elements/title/title";

export function LocationComponent(): ReactElement {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY!,
  });

  return (
    <div
      id="location"
      className="location-component responsive-component m-auto w-50 mt-5 pt-5 d-flex flex-column justify-content-center align-items-start"
    >
      <TitleElement
        icon={<MdLocationOn />}
        title="Localização"
        subtitle="Onde estamos?"
      />
      <Col className="localization-map w-100 p-0 mt-3">
        {!isLoaded ? (
          <h1>Loading...</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={{ lat: -27.4284711, lng: -48.4584489 }}
            zoom={13}
          >
            <Marker
              position={{ lat: -27.4284711, lng: -48.4584489 }}
            />
          </GoogleMap>
        )}
      </Col>
    </div>
  );
}
