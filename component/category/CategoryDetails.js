import { Errors } from "@/lib/helper";
import React from "react";
import HeaderStyle from "../Navigation/HeaderStyle";

const CategoryDetails = ({ products }) => {
  return (
    <>
      <div>
        {products.length <= 0 ? (
          <Errors />
        ) : (
          <>
            <HeaderStyle color="bg-emerald-300" text={products[0].categories} />
            <div className="carousel-item w-full">
              <img
                src="https://ng.jumia.is/cms/0-6-anniversary/2023/Generic-Brand_partners/Defacto/Defacto-MLP.jpg"
                className="w-full rounded-b-lg"
              />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-3 mt-10 bg-white shadow-lg">
              {products.map((product) => {
                return (
                  <div className="flex flex-col text-center">
                    <img src={product.url} />
                    <span>{product.title}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CategoryDetails;
