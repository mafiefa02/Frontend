import icon from "../images/icon-cart.svg";

interface cardProps {
  height?: string;
  width?: string;
  productImg?: string;
  productType?: string;
  productName?: string;
  productDesc?: string;
  productDiscPrice?: string;
  productPrice?: string;
}

export default function Card(props: cardProps) {
  return (
    <div
      className="card-container"
      style={{
        display: "flex",
        flexDirection: "row",
        flex: "50% auto",
        height: props.height,
        width: props.width,
        borderRadius: "10px",
        overflow: "hidden",
        backgroundColor: "white",
      }}
    >
      <div
        className="img-container"
        style={{
          height: "inherit",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <img
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            height: "100%",
            width: "auto",
          }}
          src={props.productImg}
          alt="product image"
        />
      </div>
      <div
        className="desc-container"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "inherit",
          width: "100%",
          padding: "20px 55px 0px 55px",
        }}
      >
        <h5
          style={{
            color: "var(--secondary)",
            letterSpacing: "3.4pt",
            marginTop: "25px",
            marginBottom: "17px",
          }}
        >
          {props.productType}
        </h5>
        <h1 style={{ marginBottom: "25px" }}>{props.productName}</h1>
        <p style={{ color: "var(--secondary)" }}>{props.productDesc}</p>
        <div
          className="price-container"
          style={{
            display: "flex",
            height: "auto",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "2em",
            marginBottom: "25px",
            marginTop: "25px",
          }}
        >
          <h3>{props.productPrice}</h3>
          <p style={{ color: "var(--secondary)" }}>
            <s>{props.productDiscPrice}</s>
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            minHeight: "3.1em",
            borderColor: "transparent",
            borderRadius: "10px",
            backgroundColor: "var(--primary)",
            color: "white",
            gap: "0.5em",
          }}
        >
          <img
            src={icon}
            alt="cart icon"
            style={{
              width: "16px",
              height: "16px",
            }}
          />
          <p>
            <b>Add to Cart</b>
          </p>
        </div>
      </div>
    </div>
  );
}
