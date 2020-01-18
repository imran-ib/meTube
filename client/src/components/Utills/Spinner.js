import React from "react";
import LoadingOverlay from "react-loading-overlay";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Spinner({ children }) {
  return (
    <LoadingOverlay
      active={true}
      spinner={<Loader type="Watch" color="#00BFFF" height={100} width={100} />}
    ></LoadingOverlay>
  );
}

export default Spinner;
