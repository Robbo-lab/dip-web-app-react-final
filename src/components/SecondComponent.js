import React from "react";
import ThirdComponent from "./ThirdComponent";

// Uncomment these lines on we have context setup using ContextApp
const SecondComponent = () => {
  return (
    <div>
      <h2 className="is-size-5 has-text-weight-semibold mb-3">Second Component User is NOT DEFINED </h2>
      {/* <ThirdComponent userName={userName} /> */}
      <div className="notification is-link is-light ml-3 mb-0">
        <ThirdComponent />
      </div>
    </div>
  );
};

export default SecondComponent;
