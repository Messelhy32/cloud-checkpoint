/* eslint-disable react/prop-types */
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const LocationPin = ({ text }) => (
  <div className='pin'>
    <Icon icon={locationIcon} className='pin-icon' />
    <p className='pin-text'>{text}</p>
  </div>
);

const Map = ({ location, zoomLevel }) => (
  <div className='map'>
    <div className='google-map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY}}
        defaultCenter={location}
        defaultZoom={zoomLevel}>
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
);

export default Map;
