import { useLoadScript, GoogleMap, Marker } from '@react-google-maps/api';
import './OuSommesNous.css'

const libraries = ['places'];

function OuSommesNous() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg",
    libraries
  });

  const center = {
    lat: 43.949317, // Latitude d'Avignon
    lng: 4.805528   // Longitude d'Avignon
  };

  const mapOptions = {
    disableDefaultUI: true,
    zoomControl: true,
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      }
    ]
  };

  if (!isLoaded) return <div>Chargement de la carte...</div>;

  return (
    <div className="ou-sommes-nous-container">
      <h2>Où Sommes-Nous</h2>
      <div className="map-container">
        <div className="map">
          <GoogleMap
            zoom={15}
            center={center}
            mapContainerClassName="google-map"
            options={mapOptions}
          >
            <Marker
              position={center}
              animation={google.maps.Animation.DROP}
            />
          </GoogleMap>
        </div>
        <div className="location-info">
          <h3>NEXT-DRIVER Avignon</h3>
          <p>Service disponible 24/7</p>
          <p>Avignon, France</p>
          <p className="address">123 Rue de la République, 84000 Avignon</p>
        </div>
      </div>
    </div>
  );
}

export default OuSommesNous; 