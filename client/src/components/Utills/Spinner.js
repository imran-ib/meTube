import React from "react";
import LoadingOverlay from "react-loading-overlay";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function Spinner({ children }) {
  return (
    <LoadingOverlay
      active={true}
      spinner={<Loader type="Watch" color="#00BFFF" height={200} width={200} />}
    ></LoadingOverlay>
  );
}

export default Spinner;
