"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { blinkit, instamart, zepto } from '../../public/assets/logos'

export default function StoreSelector() {
  const stores = [
    { name: 'Blinkit', logo: blinkit },
    { name: 'Zepto', logo: zepto },
    { name: 'Instamart', logo: instamart },
  ]

  const [active, setActive] = useState('Blinkit')

  return (
    <div className="flex items-center gap-1 rounded-[12px] border-[0.5px] p-1 bg-white w-fit border-[#031B151A]">
      {stores.map((store) => (
        <button
          key={store.name}
          onClick={() => setActive(store.name)}
          className={`flex items-center gap-[6px] px-3.5 py-1.5 rounded-[10px] transition-all text-sm font-medium ${
            active === store.name
              ? 'bg-[#DFEAE8] text-[#027056]'
              : 'opacity-30 hover:opacity-70'
          }`}
        >
          <Image src={store.logo} alt={store.name} width={16} height={16} />
          {store.name}
        </button>
      ))}
    </div>
  )
}
