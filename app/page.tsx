import Image from "next/image";

export default function Home() {
  return (
    <div className="px-5 my-3">
      <div className="text-[#393939] font-medium text-[14px] flex items-center">
        Home
        <span className="mx-2 text-[#9C9C9C]">•</span>
        <span className="text-[#9C9C9C]">Art de la table</span>
      </div>

      <div className="grid grid-cols-2">
        <div>img</div>
        <div className="border border-gray-500">
        <div className="font-serif text-3xl  font-normal leading-[37.5px] text-left underline decoration-solid decoration-[transparent] flex justify-between items-center">
          <span>Cheese – appareil à raclette 1/2 roue</span>
          <Image src="/navbar/heart.svg" alt="Favourites Icon" width={27.64} height={25.34} />

        </div>

        </div>
        


      </div>

    </div>
  );
}
