import React from "react";
import HeaderStyle from "../Navigation/HeaderStyle";

const Slider = () => {
  return (
    <>
      <HeaderStyle color="bg-sky-500" text="Official Store" />
      <div className="carousel carousel-center w-full ">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://ng.jumia.is/cms/0-6-anniversary/2023/Generic-Brand_partners/Defacto/Defacto-MLP.jpg"
            className="w-full rounded-b-lg"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://ng.jumia.is/cms/0-6-anniversary/2023/Generic-Brand_partners/Oraimo/Oraimo_MLP_copy.png"
            className="w-full rounded-b-lg"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://ng.jumia.is/cms/0-6-anniversary/2023/Generic-Brand_partners/Oraimo/Oraimo_MLP_copy.png"
            className="w-full rounded-b-lg"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </>
  );
};

export default Slider;
