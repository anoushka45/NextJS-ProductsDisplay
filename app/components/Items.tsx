import React from "react";
import SimilarProductCard from "./SimilarItems";

export interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  badge: string;
}

export interface ItemsProps {
  products: Product[];
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div>
      <div className="rounded-md  bg-[#F9F7F5] lg:w-[330px] lg:h-[350px] w-[280px] h-[350px] p-4">
        {/* Card Header */}
        <div className="flex justify-between items-center">
          <img
            src="/navbar/heart.svg"
            alt="Heart Icon"
            className="w-[32px] h-[32px] cursor-pointer"
          />
          <span className="bg-white text-black font-geist text-[10px] uppercase font-medium px-3 py-1 rounded-full">
            {product.badge}
          </span>
        </div>

        {/* Card Image */}
        <div className="h-52 lg:h-60 overflow-hidden flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className=""
          />
        </div>
      </div>

      {/* Card Body (Moved outside the card) */}
      <div className="mt-4 flex justify-between items-center">
        <h5 className="text-sm lg:text-[24px]  mb-2 font-PlayfairDisplay text-gray-800">
          {product.title}
        </h5>
        <p className="text-lg lg:text-[24px]  font-geist ">{product.price}

          <sup>€</sup>
        </p>
      </div>

      <div className="flex justify-between items-center mt-1">
        <span className="text-sm text-[#9C9C9C]">0,35€/Pièce <span className="text-[11px]">· RÉF : VABGN5</span></span>
        <span className="bg-[#F1F4F6] text-[#546A7D] text-[11px] font-semibold px-3 py-1 rounded-full">
          20 pièces
        </span>
      </div>
    </div>
  );
};

const Items: React.FC<ItemsProps> = ({ products }) => {
  return (
    <section>
      <div className="relative bg-[#FBF9F899]">
        <div className="flex justify-between items-center text-[#393939] mx-4 mt-5  ">
          <h1 className="text-[#393939] text-[35px] font-medium  font-sans">Articles similaires</h1>
          <span className=" text-black text-[16px] uppercase underline">
            Voir toute la collection
          </span>
        </div>
        {/* Left Arrow */}
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#5CD2DD] h-[46px] w-[46px] hover:bg-blue-500 text-white p-3  hidden lg:flex">
        <img src="/main/arrow.svg" className="rotate-180 mt-1" alt="" />
        </button>

        {/* Products Wrapper */}
        <div
          className="grid lg:flex lg:space-x-4 py-6 px-4 lg:overflow-hidden lg:gap-0"
          style={{ maxWidth: "100%" }}
        >
          {products.map((product, index) => (
            <div key={product.id} className="grid-cols-1 md:grid-cols-3">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#5CD2DD] h-[46px] w-[46px] hover:bg-blue-500 text-white p-3  shadow-md hidden lg:flex">
          <img src="/main/arrow.svg" alt="" className="mt-1" />
        </button>
      </div>

      <div className="relative bg-white">
        <div className="flex justify-between items-center text-[#393939] mx-4 mt-5">
          <h1 className="text-[#393939] text-[35px] font-medium">Ces produits pourraient vous intéresser</h1>
          <span className="text-black text-[16px] uppercase underline">
            Voir toute la collection
          </span>
        </div>

      
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 py-6 px-4"
        >
          {products.slice(0, 3).map((product) => (
            <div
              key={product.id}
              className="col-span-1 p-4 flex flex-col justify-between"
            >
              <SimilarProductCard product={product} />
            </div>
          ))}
        </div>

        
      </div>


    </section>

  );
};

export default Items;
