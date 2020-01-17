import React, { useState } from "react";
//! Because We Are Server side rendering our app this is solution i found for load file stack sdk
import loadable from "@loadable/component";
const ReactFilestack = loadable(() => import("filestack-react"));

function ImageUpload({ url, setURL }) {
  const onSuccess = result => {
    setURL(result.filesUploaded[0].url);
  };
  const onError = error => {
    console.error("error", error);
  };
  const basicOptions = {
    accept: "image/*",
    fromSources: ["local_file_system"],
    maxSize: 1024 * 1024,
    maxFiles: 1
  };
  return (
    <div>
      {url && <img src={url} alt="" />}
      <ReactFilestack
        apikey={`Ay2j9woXaSkSXBjoox2uWz`}
        componentDisplayMode={{
          type: "button",
          customText: "Upload Background Image",
          customClass: "btn btn-danger"
        }}
        options={basicOptions}
        onSuccess={onSuccess}
        onError={onError}
      />
    </div>
  );
}

export default ImageUpload;
//https://medium.com/@krandles/painless-file-upload-and-hosting-with-filestack-react-ba80455d2aa7
