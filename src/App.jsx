import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import OurHistory from "./components/OurHistory";
import Cards from "./components/Cards";
import MainProducts from "./components/MainProducts";
import BusinessPartner from "./components/BusinessPartner";
import Location from "./components/Location";

function App() {
  return (
    <div
      className="w-screen h-screen bg-white "
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      <Header />
      <Banner />
      <OurHistory />
      <Cards />
      <MainProducts />
      <BusinessPartner />
      <Location />
    </div>
  );
}

export default App;
