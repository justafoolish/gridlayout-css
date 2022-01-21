import React from "react";

import Welcome from "./pages/Welcome";

const App = () => {

  return (
    <>
      <Welcome />
      <div className="min-h-screen flex">
        <div className="m-auto bg-stone-200 px-10 py-4 rounded-lg ring-4 ring-stone-300">
          <h3 className="font-medium text-3xl m-auto animate-pulse text-stone-700">Developing. . .</h3>
        </div>
      </div>
    </>
  );
};

export default App;
