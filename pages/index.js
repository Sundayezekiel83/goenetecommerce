import Header from "@/component/Header/Header";
import Recommend from "@/component/Recommended/Recommend";
import Slider from "@/component/SliderPage/Slider";

export default function Home() {
  return (
    <main className="md:max-w-7xl max-auto p-2">
      <Header />
      <Recommend />
      <Slider />
    </main>
  );
}
