import Image from "next/image";

export default function Home() {
  return (
    <div className="px-5 my-3">
      <div className="text-[#393939] font-medium text-[14px] flex items-center">
        Home
        <span className="mx-2 text-[#9C9C9C]">•</span>
        <span className="text-[#9C9C9C]">Art de la table</span>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1">
        <div className="border border-gray-500">img</div>
        <div className="border border-gray-500">
          <div className="font-serif text-3xl   leading-[37.5px] text-left underline decoration-solid decoration-[transparent] flex justify-between items-center">
            <span>Cheese – appareil à raclette 1/2 roue</span>
            <Image src="/navbar/heart.svg" alt="Favourites Icon" width={27.64} height={25.34} />
          </div>
          <div>
            <p className="text-[#111928] text-[24px] font-normal">39,50€ <span className="text-[#9C9C9C] text-[14px]">/pièce</span></p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Image src="/main/scale.svg" alt="scale" width={24} height={24} />
              <span className="font-geist text-[16px] font-normal leading-[20px] text-left underline decoration-transparent decoration-skip-ink">
                20<sup className="text-[12px] align-super">cm</sup>
              </span>

              <Image src="/main/Oval.svg" alt="oval" width={24} height={24} />
              <span className="font-geist text-[16px] font-normal leading-[20px] text-left underline decoration-transparent decoration-skip-ink">
                50<sup className="text-[12px] align-super">cm</sup>
              </span>
            </div>

            <p className="text-[#9C9C9C] font-medium text-[12px]">RÉF : VABGN5</p>
          </div>

          <div className="text-[#5D5D5D] text-[14px] leading-[18.2px] mt-2">
            <p>Location appareil à raclette - Raclette traditionnelle 1/2 roue </p>
            <p>Réglable en hauteur</p>
            <p>Appareil à raclette professionnel</p>
            <p>Boîtier de chauffe horizontal réglable en hauteur</p>
            <p className="mt-2">220V</p>
            <p>900W</p>

          </div>
        </div>



      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-2 ">
        <div>
          <p className="leading-[20px] text-[20px] font-normal text-[#111928] mb-3">Description produit</p>
          <p className="text-[#9C9C9C] text-[14px] leading-[18.2px]">Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite.
            Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</p>
        </div>

        <div className="p-2 uppercase rounded-md border border-[#FBF9F899]  bg-[#FBF9F899]">
          <div className="bg-[#FBF9F899] p-3 flex justify-between items-center">
            <span>Livraisons</span>
            <Image src="/main/plus_icon.svg" alt="Inspirations Icon" width={14} height={14} />
          </div>
          <div className="bg-[#FBF9F899] p-3 flex justify-between items-center">
            <span>Questions</span>
            <Image src="/main/plus_icon.svg" alt="Inspirations Icon" width={14} height={14} />
          </div>
        </div>

      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-6 mt-6">
        <div className=" pr-4">
          <img src="/main/display.png" alt="Image" className="w-full h-auto rounded-lg" />
        </div>



        <div className="border bg-[#FFF3F9]">
          <h2 className="text-xl font-semibold mb-2">S'inscrire & économiser 10%</h2>
          <p className="text-sm text-gray-500 mb-4">
            Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message.
          </p>
          <div className="flex items-center">
            <input type="email" placeholder="john@doe.com" className="p-2 border rounded-l-md w-full" />
            <button className="bg-teal-500 text-white p-2 rounded-r-md hover:bg-teal-600">S'inscrire →</button>
          </div>
        </div>
      </div>

    </div>
  );
}
