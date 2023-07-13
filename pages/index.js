import Header from "@/component/Header/Header";
import Recommend from "@/component/Recommended/Recommend";
import Slider from "@/component/SliderPage/Slider";
import { fetchProducts, fetchProductsByCategory } from "@/lib/Fetchdata";

export default function Home({ products }) {
  return (
    <main className="md:max-w-7xl mx-auto p-2 bg-sky-50 shadow-md">
      <Header />
      <Recommend />
      <Recommend />
      <Recommend />
      <Recommend />
      <Recommend />
      <Recommend />
      <Slider />
    </main>
  );
}
