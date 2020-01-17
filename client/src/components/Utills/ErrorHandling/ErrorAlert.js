import React from "react";
import { Alert } from "reactstrap";

import PropTypes from "prop-types";
import { ErrorMessage } from "./CustomiseError";

//!TODO Change Alert with Simple Bootstrap or custo styles

const DisplayError = ({ error }) => {
  if (!error || !error.message) return null;

  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <div style={{ textAlign: "center" }} key={i}>
        <Alert color="danger" data-test="error">
          <strong>OOPS ! </strong>
          <h4>{error.message}</h4>
        </Alert>
      </div>
    ));
  }
  return (
    <div>
      <Alert color="danger" data-test="error">
        <strong>OOPS ! </strong>
        <h4>{error.message}</h4>
      </Alert>
    </div>
  );
};

DisplayError.defaultProps = {
  error: {}
};

DisplayError.propTypes = {
  error: PropTypes.object
};

export default DisplayError;
