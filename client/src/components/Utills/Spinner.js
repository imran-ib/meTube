import React from "react";
import LoadingOverlay from "react-loading-overlay";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Spinner({ children }) {
  return (
    <LoadingOverlay
      active={true}
      spinner={<Loader type="Watch" color="#00BFFF" height={200} width={200} />}
    ></LoadingOverlay>
  );
}

export default Spinner;
