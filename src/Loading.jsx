import React from "react";

import { PuffLoader } from "react-spinners";
const Loading = () => {
  console.log("loading");

  return (
    <div
      style={{
       position: 'fixed', 
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)'
      }}
    >
      <PuffLoader color="#0c1187"  />
    </div>
  );
};

export default Loading;
