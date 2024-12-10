import React from "react";

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



const SimilarProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div>


      <div className="rounded-md  bg-[#F9F7F5]   p-4">
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
        <div className="h-52 lg:h-60 overflow-hidden flex items-center justify-center ">
          <img
            src={product.image}
            alt={product.title}
            className=""
          />
        </div>
      </div>

      

      <div className="mt-4 flex justify-between items-center">
        <h5 className="text-sm lg:text-[24px] font-medium mb-2 text-gray-800 font-PlayfairDisplay">
          {product.title}
        </h5>
        <p className="text-lg lg:text-[24px]  font-geist ">{product.price}

          <sup>€</sup>
        </p>      </div>

      <div className="flex justify-between items-center mt-1">
        <span className="text-sm text-[#9C9C9C]">0,35€/Pièce <span className="text-[11px]">· RÉF : VABGN5</span></span>
        <span className="bg-[#F1F4F6] text-[#546A7D] text-[11px] font-semibold px-3 py-1 rounded-full">
          20 pièces
        </span>
      </div>
    </div>
  );
}

export default SimilarProductCard