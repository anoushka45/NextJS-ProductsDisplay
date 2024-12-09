import React from 'react'

function Info() {
  return (
    <section>
    <div className="bg-gradient-to-t to-[#FFF3F9] from-white py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-sans font-medium text-[#393939]">
          On s'occupe de <span className="text-[#5CD2DD] font-bold">tout</span>
        </h2>
        <p className="text-[#9C9C9C] text-sm mt-2 font-geist">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </div>
    <div className="relative grid grid-cols-1 md:grid-cols-4 gap-3 max-w-4xl mx-auto px-3 font-sans font-medium">
      {/* Item 1 */}
      <div className="relative text-center">
        <img src="/main/cart.svg" alt="Livraison" className="mx-auto mb-4" />
        <h3 className="text-lg font-medium text-[#393939]">Livraison & Reprise</h3>
        <p className="text-sm text-[#BDA2B0] mt-2">Selon vos besoins</p>
        {/* Line to next item */}
        <div className="hidden md:block absolute top-[30%] translate-y-[-50%] right-[-60px] w-[100px] h-0.5 bg-gray-300"></div>
      </div>
    
      {/* Item 2 */}
      <div className="relative text-center">
        <img src="/main/nettoyage.svg" alt="Nettoyage" className="mx-auto mb-4" />
        <h3 className="text-lg font-medium text-[#393939]">Nettoyage</h3>
        <p className="text-sm text-[#BDA2B0] mt-2">Selon vos besoins</p>
        {/* Line to next item */}
        <div className="hidden md:block absolute top-[30%] translate-y-[-50%] right-[-60px] w-[100px] h-0.5 bg-gray-300"></div>
      </div>
    
      {/* Item 3 */}
      <div className="relative text-center">
        <img src="/main/shopping.svg" alt="Commande Illimitée" className="mx-auto mb-4" />
        <h3 className="text-lg font-medium text-[#393939]">Commande Illimitée</h3>
        <p className="text-sm text-[#BDA2B0] mt-2">Tout est possible</p>
        {/* Line to next item */}
        <div className="hidden md:block absolute top-[30%] translate-y-[-50%] right-[-60px] w-[100px] h-0.5 bg-gray-300"></div>
      </div>
    
      {/* Item 4 */}
      <div className="relative text-center">
        <img src="/main/transport.svg" alt="Transport & Enlèvement" className="mx-auto mb-4" />
        <h3 className="text-lg font-medium text-[#393939]">Transport & Enlèvement</h3>
        <p className="text-sm text-[#BDA2B0] mt-2 ">On s’occupe de tout.</p>
      </div>
    </div>
    
    
    </div>
    
    
    <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-2 mt-12 mb-5 px-3 ">
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
         
    </section>
  )
}

export default Info