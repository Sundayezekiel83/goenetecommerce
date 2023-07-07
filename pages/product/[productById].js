import ProductDetails from "@/component/product/ProductDetails";
import { fetchProductById } from "@/lib/Fetchdata";

export default function ProductByID({ response }) {
  return (
    <>
      <ProductDetails response={response} />
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
