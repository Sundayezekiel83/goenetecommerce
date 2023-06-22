import React from "react";

const Slider = () => {
  return (
    <>
      <div className="carousel carousel-center w-full mt-3 p-3">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://ng.jumia.is/cms/0-6-anniversary/2023/Generic-Brand_partners/Defacto/Defacto-MLP.jpg"
            className="w-full rounded-lg"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://ng.jumia.is/cms/0-6-anniversary/2023/Generic-Brand_partners/Oraimo/Oraimo_MLP_copy.png"
            className="w-full rounded-lg"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://ng.jumia.is/cms/0-6-anniversary/2023/Generic-Brand_partners/Oraimo/Oraimo_MLP_copy.png"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          .
        </a>
        <a href="#item2" className="btn btn-xs">
          .
        </a>
        <a href="#item3" className="btn btn-xs">
          .
        </a>
      </div>
    </>
  );
};

export default Slider;