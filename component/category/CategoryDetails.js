import { Errors } from "@/lib/helper";
import React from "react";
import HeaderStyle from "../Navigation/HeaderStyle";
import Naira from "react-naira";
import Link from "next/link";

const CategoryDetails = ({ products }) => {
  return (
    <>
      <div className="container px-10">
        {products.length <= 0 ? (
          <Errors />
        ) : (
          <>
            <div className="carousel-item w-full mb-4 mt-4 rounded-tl-lg bg-white shadow-md">
              <img
                src="https://ng.jumia.is/cms/0-6-anniversary/2023/Generic-Brand_partners/Defacto/Defacto-MLP.jpg"
                className="w-full rounded-b-lg"
              />
            </div>
            <HeaderStyle color="bg-emerald-300" text={products[0].categories} />
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 bg-white shadow-lg">
              {products.map((product, index) => {
                return (
                  <div
                    className="flex flex-col text-center gap-2 pt-2 px-1 bg-white hover:shadow-2xl hover:animate-pulse hover:rounded-lg mx-auto"
                    key={index}
                  >
                    <Link
                      href={`/product/${product.id}`}
                      className="text-black"
                    >
                      <img src={product.url} className="h-[10rem] w-[20rem]" />
                      <span className="hover:underline hover:cursor-pointer">
                        {product.title}
                      </span>
                      <p className="font-bold hover:underline hover:cursor-pointer">
                        <Naira>{product.productPrice}</Naira>
                      </p>
                    </Link>
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
