import React from "react";

function Weekly() {
  return (
    <div className="weeksWrapper" id="weekly">
      <div className="weeksContainer">
        <div className="weeksContent">
          <h2>Heti ajánlatunk</h2>
          <h3>Margherita Pizza</h3>
          <h4>paradicsom, szeletelt mozzarella, bazsalikom</h4>
          <h4 className="price">1350 Ft</h4>
          {/* <button>Asztalfoglalás</button> */}
        </div>
      </div>
    </div>
  );
}

export default Weekly;
