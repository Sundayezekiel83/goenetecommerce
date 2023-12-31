import CategoryDetails from "@/component/category/CategoryDetails";
import { fetchProducts, fetchProductsByCategory } from "@/lib/Fetchdata";
import React from "react";

export default function categories({ products }) {
  return (
    <div className="container">
      <CategoryDetails products={products} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const category = context.params.category;
  console.log(category);
  const products = await fetchProductsByCategory(category);

  return {
    props: {
      products,
    },
  };
}
