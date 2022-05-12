import React, { forwardRef } from "react";
import "./Loader.css"

const Loader = forwardRef((props, ref) => {
  
  return (
    <div className="flex items-center justify-center absolute w-full h-full z-50 loader">
      <img src="/loading.gif" alt="loading..." width="240px" />
    </div>
  );
});

export default Loader;
