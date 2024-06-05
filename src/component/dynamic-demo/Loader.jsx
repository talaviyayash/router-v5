import React, { CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const Loader = ({ loading }) => {
  return (
    <>
      <ClipLoader
        color={"black"}
        loading={loading || true}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  );
};

export default Loader;
