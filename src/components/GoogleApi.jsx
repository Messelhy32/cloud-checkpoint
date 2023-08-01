import { useState, useCallback, memo } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "1000px",
  height: "1000px",
};

const center = {
  lat: 30.035132305254503,
  lng: 31.21532240610864,
};
function GoogleApi() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_API_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={15}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker
        position={center}
        label={{
          text: "GOMYCODE Dokki", // Specify the label text
          className: "label", // Apply custom CSS styles to the label
        }}
      />
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default memo(GoogleApi);
