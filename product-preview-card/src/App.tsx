import Card from "./components/Card";
import productImg from "./images/image-product-desktop.jpg";

function App() {
  return (
    <div className="App">
      <div
        className="background"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxHeight: "100%",
          height: "100vh",
        }}
      >
        <Card
          height="30em"
          width="40em"
          productType="PERFUME"
          productImg={productImg}
          productName="Gabrielle Essence Eau De Parfum"
          productDesc="A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL."
          productPrice="$149.99"
          productDiscPrice="$169.99"
        />
      </div>
    </div>
  );
}

export default App;
