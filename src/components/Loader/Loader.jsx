import React, { forwardRef } from "react";
import "./Loader.css"
import { Center } from '@mantine/core';

const Loader = forwardRef((props, ref) => {
  
  return (
    <Center className="loader">
      <img src="/loading.gif" alt="loading..." width="240px" />
    </Center>
  );
});

export default Loader;
