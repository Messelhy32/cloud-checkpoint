import Map from "./components/Map";

function App() {
  const location = {
    address: "GOMYCODE Dokki",
    lat: 30.035877854714503,
    lng: 31.216118476134767,
  };
  return (
    <>
      <center>
        <h1>Visit Us</h1>
        <Map location={location} zoomLevel={15} />
      </center>
    </>
  );
}

export default App;
