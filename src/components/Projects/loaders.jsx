import ClipLoader from "react-spinners/ClipLoader";

const override = {
  width: "45px",
  height: "45px",
  borderRadius: "100%",
  borderWidth: "4px",
  borderStyle: "solid",
  borderColor: "rgb(158 170 191 / 58%) rgb(134 145 164) transparent",
  borderImage: "initial",
  display: "inline-block",
  animation:
    "0.75s cubic-bezier(0.21, 0.11, 0.74, 0.85) 0s infinite normal both running react-spinners-ClipLoader-clip",
};

export const Spinner = () => {
  return (
    <ClipLoader
      cssOverride={override}
      size={50}
      color="#728db8"
      className="image-loading"
      id="carousel-spinner"
      aria-label="loading spinner"
    />
  );
};

export const Loading = () => {
  return (
    <div className="carousel-container">
      <Spinner />
    </div>
  );
};
