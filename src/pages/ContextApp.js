import React, { useState } from "react";
import SecondComponent from "../components/SecondComponent";
import FourthComponent from "../components/FourthComponent";
import { UserContext } from "../contexts/UserContext";

const ContextApp = () => {
  const [userName, setUserName] = useState("Lucas");

  return (
    <UserContext.Provider value={userName}>
      <div className="has-text-left">
        <h1 className="title is-4 mb-5">Using Context API</h1>
        <div className="box mb-4">
          <SecondComponent />
        </div>
        <div className="box mb-4">
          <FourthComponent />
        </div>
        <p className="help is-size-7 mt-3 has-text-centered">
          Context shares user state: Second nests Third; Third and Fourth read
          it with useContext and re-render when it changes.
        </p>
      </div>
    </UserContext.Provider>
  );
};

export default ContextApp;
