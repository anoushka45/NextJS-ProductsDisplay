import React from 'react'
import Image from 'next/image'
function ProdDesc() {
  return (
    <div className="grid lg:grid-cols-2 md:grid-cols-1 mt-2 px-3 gap-4">
    <div>
      <p className="leading-[20px] text-[20px] font-normal text-[#111928] mb-3 font-sans">Description produit</p>
      <p className="text-[#9C9C9C] text-[14px] leading-[18.2px] font-geist">Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite.
        Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie "Art de la Table".</p>
    </div>

    <div className=" uppercase rounded-md border border-[#FBF9F899]  bg-[#FBF9F899]">
      <div className="bg-[#FBF9F899] p-3 flex justify-between items-center">
        <span>Livraisons</span>
        <Image src="/main/plus_icon.svg" alt="Inspirations Icon" width={14} height={14} />
      </div>
      <div className="bg-[#FBF9F899] p-3 flex justify-between items-center">
        <span>Questions</span>
        <Image src="/main/plus_icon.svg" alt="Inspirations Icon" width={14} height={14} />
      </div>
    </div>

  </div>  )
}

export default ProdDesc