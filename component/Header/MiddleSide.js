import React from "react";

const MiddleSide = () => {
  return (
    <>
      <div className="w-full lg:w-[60%]">
        <div className="carousel w-full  h-[100%] rounded-lg">
          <div id="item1" className="carousel-item w-full">
            <img
              src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2023/w29-hisense-brand-day/712x384.png"
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
      </div>
    </>
  );
};

export default MiddleSide;
