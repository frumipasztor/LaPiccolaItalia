import React from "react";

function AboutUs() {
  return (
    <div className="aboutUs">
      <div className="aboutUsContainer">
        <div className="aboutUsleft">
          <img className="pizza1" src="/img/aboutUs/pizza1.png" alt=""></img>
          <img className="pizza2" src="/img/aboutUs/pizza2.png" alt=""></img>
          <img className="pizza3" src="/img/aboutUs/pizza3.png" alt=""></img>
          <img
            className="pizza4"
            src="/img/aboutUs/aboutuspizza.jpg"
            alt=""
          ></img>
        </div>
        <div className="aboutUsText">
          <p>Az oldal jelenleg fejlesztés alatt áll!</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aperiam repellendus enim eius deserunt blanditiis, ipsum laborum
            quisquam tenetur quae animi dignissimos excepturi in doloremque
            rerum iure minus consequatur eaque?
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
