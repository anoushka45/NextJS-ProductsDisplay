import Image from "next/image";

export default function Home() {
  return (
    <div className=" my-3">
      <div className="text-[#393939] font-medium text-[14px] flex items-center">
        Home
        <span className="mx-2 text-[#9C9C9C]">•</span>
        <span className="text-[#9C9C9C]">Art de la table</span>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 px-3">
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

      <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-2 px-3">
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

<div className="bg-gradient-to-t to-[#FFF3F9] from-white py-10">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-semibold text-[#393939]">
      On s'occupe de <span className="text-[#5CD2DD] font-bold">tout</span>
    </h2>
    <p className="text-[#9C9C9C] text-sm mt-2">
      Office ipsum you must be muted. It meeting commitment busy pain.
    </p>
  </div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-3 max-w-4xl mx-auto px-3">
  {/* Item 1 */}
  <div className="relative text-center">
    <img src="/main/cart.svg" alt="Livraison" className="mx-auto mb-4" />
    <h3 className="text-lg font-medium text-[#393939]">Livraison & Reprise</h3>
    <p className="text-sm text-[#BDA2B0]">Selon vos besoins</p>
    {/* Line to next item */}
    <div className="hidden md:block absolute top-[30%] translate-y-[-50%] right-[-60px] w-[100px] h-0.5 bg-gray-300"></div>
  </div>

  {/* Item 2 */}
  <div className="relative text-center">
    <img src="/main/nettoyage.svg" alt="Nettoyage" className="mx-auto mb-4" />
    <h3 className="text-lg font-medium text-[#393939]">Nettoyage</h3>
    <p className="text-sm text-[#BDA2B0]">Selon vos besoins</p>
    {/* Line to next item */}
    <div className="hidden md:block absolute top-[30%] translate-y-[-50%] right-[-60px] w-[100px] h-0.5 bg-gray-300"></div>
  </div>

  {/* Item 3 */}
  <div className="relative text-center">
    <img src="/main/shopping.svg" alt="Commande Illimitée" className="mx-auto mb-4" />
    <h3 className="text-lg font-medium text-[#393939]">Commande Illimitée</h3>
    <p className="text-sm text-[#BDA2B0]">Tout est possible</p>
    {/* Line to next item */}
    <div className="hidden md:block absolute top-[30%] translate-y-[-50%] right-[-60px] w-[100px] h-0.5 bg-gray-300"></div>
  </div>

  {/* Item 4 */}
  <div className="relative text-center">
    <img src="/main/transport.svg" alt="Transport & Enlèvement" className="mx-auto mb-4" />
    <h3 className="text-lg font-medium text-[#393939]">Transport & Enlèvement</h3>
    <p className="text-sm text-[#BDA2B0]">On s’occupe de tout.</p>
  </div>
</div>


</div>


<div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2 mt-6 mb-5 px-3">
  <div className="pr-4 flex items-stretch">
    <img src="/main/display.png" alt="Image" className="w-full h-auto rounded-2xl object-cover" />
  </div>

  <div className="border-none rounded-2xl bg-[#FFF3F9] flex flex-col justify-between">
    <div className="mx-3 px-4 mt-6 flex-grow">
      <h2 className="xl:text-[38px] md:text-[24px] sm:text-[20px] font-medium text-[#393939] mb-2 mt-2">
        S'inscrire & économiser <span className="text-[#5CD2DD]">10%</span>
      </h2>
      <p className="text-sm text-[#BDA2B0] font-medium mb-4">
        Office ipsum you must be muted. Synergize helicopter prioritize anyway job due harvest most opportunity didn't. Yet busy any meeting shark light marginalised 4-blocker message.
        Productize corporate nail caught synergy highlights lunch.
        Company another pushback items dear or any.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-2 xl:mb-0 md:mb-2">
  <input
    type="email"
    placeholder="john@doe.com"
    className="p-4 border rounded-md w-full mt-3"
  />
  <button
    className="p-4 border rounded-md bg-[#5CD2DD] uppercase text-white sm:text-sm xl:text-[18px] mt-3 px-6 whitespace-nowrap w-full sm:w-full md:w-1/4 md:mb-0 sm:mb-4 "
  >
    S'inscrire <span className="ml-2">→</span>
  </button>
</div>

    </div>
  </div>
</div>
     



    </div>
  );
}
