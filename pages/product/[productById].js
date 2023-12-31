import ProductDetails from "@/component/product/ProductDetails";
import { fetchProductById } from "@/lib/Fetchdata";

export default function ProductByID({ response }) {
  return (
    <>
      <div className="container px-10 bg-slate-100">
        <ProductDetails response={response} />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const productId = context.params.productById;

  const response = await fetchProductById(productId);

  return {
    props: {
      response,
    },
  };
}
