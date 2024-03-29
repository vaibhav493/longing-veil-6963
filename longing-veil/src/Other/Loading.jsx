 import React from "react";
 import ReactDOM from "react-dom";
import { Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <div style={{zIndex:'123', marginTop: "19%", marginLeft: "48%" }}>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="#ED64A6
      "
        size="xl"
      />
    </div>
  );
}
