import React from "react";

const Recommend = () => {
  return (
    <>
      <div className="pt-5 px-5">
        <div className="carousel carousel-center bg-white space-x-4 w-full shadow-lg rounded-lg mx-auto justify-center">
          <div className="carousel-item flex flex-col w-[130px] md:w-[180px]">
            <img
              src="https://ng.jumia.is/cms/0-6-anniversary/2023/initiatives/300x240/120-sec.gif"
              alt="image"
              className="rounded-box"
            />
            <span className="justify-center text-center">Phone and Tables</span>
          </div>

          <div className="carousel-item flex flex-col w-[130px] md:w-[180px]">
            <img
              src="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/refrigerators_300x240.png"
              alt="image"
              className="rounded-box"
            />
            <span className="justify-center text-center">Phone and Tables</span>
          </div>

          <div className="carousel-item flex flex-col w-[130px] md:w-[180px]">
            <img
              src="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/televisions_300x240.png"
              alt="image"
              className="rounded-box"
            />
            <span className="justify-center text-center">Phone and Tables</span>
          </div>
          <div className="carousel-item flex flex-col w-[130px] md:w-[180px]">
            <img
              src="https://ng.jumia.is/cms/0-6-anniversary/2023/300x240v2.gif"
              alt="image"
              className="rounded-box"
            />
            <span className="justify-center text-center">anniversary</span>
          </div>

          <div className="carousel-item flex flex-col w-[130px] md:w-[180px]">
            <img
              src="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/televisions_300x240.png"
              alt="image"
              className="rounded-box"
            />
            <span className="justify-center text-center">Phone and Tables</span>
          </div>
          <div className="carousel-item flex flex-col w-[130px] md:w-[180px]">
            <img
              src="https://ng.jumia.is/cms/0-1-homepage/0-0-freelinks-gray/300x240/watches_300x240.png"
              alt="image"
              className="rounded-box"
            />
            <span className="justify-center text-center">Fridge</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Recommend;
