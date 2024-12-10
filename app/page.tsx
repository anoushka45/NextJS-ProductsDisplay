import Image from "next/image";
import Items from "./components/Items";
import { products } from "./data/data";
import Info from "./components/Info";
import ProdDesc from "./components/ProdDesc";
import Banner from "./components/Banner";


export default function Home() {
  return (
    <div className=" my-3 md:mx-3 mx-5">
      <div className="text-[#393939] font-medium text-[14px] flex items-center lg:mx-4">
        Home
        <span className="mx-2 text-[#9C9C9C]">•</span>
        <span className="text-[#9C9C9C]">Art de la table</span>
      </div>

  
<Banner/>

      <ProdDesc />

      <Items products={products} />

      <Info />




    </div>
  );
}
