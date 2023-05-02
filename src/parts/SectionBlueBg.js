import React from 'react'

export default function SectionBlueBg() {
  return (
    <div className='bg-gradient-to-l from-black via-violet-950 to-black text-white'>

      <div className='flex space-x-10 p-10 justify-center max-w-full pageMargin'>
        <div>
          <p className='text-violet-400 text-7xl font-bold'>95%</p>
        </div>
        <div className='text-white text-3xl'>
          <p>C'est notre taux de rétention.</p>
          <p>Oui 95% de nos clients repartent avec One Lease à la fin de leur contrat</p>
        </div>
      </div>
      <div className='flex space-x-10 p-10 justify-center max-w-full pageMargin'>
        <div className='text-white text-4xl'>
          <p>Notre accompagnement vers la transition énergétique.</p>
          <p>En 2022, plus de 50% de nos commandes sont des véhicules éléctrifiés</p>
        </div>
        <div>
          <p className='text-violet-400 text-8xl font-bold'>50%</p>
        </div>
      </div>
      <div className='flex space-x-10 p-10 justify-center max-w-full pageMargin'>
        <div>
          <p className='text-violet-400 text-8xl font-bold'>2500</p>
        </div>
        <div className='text-white text-4xl'>
          <p>C'est la flotte gérée par One Lease pour </p>
          <p>le compte de ses clients.</p>
        </div>
      </div>
      <div className='flex space-x-10 p-10 justify-center max-w-full pageMargin'>
        <div className='flex space-x-4'>
          <img src="/img-one-lease/home/Les_Echos_Champions2022_Logo_FR_blanche.webp" alt="les champion 2022" />
          <img src="/img-one-lease/home/Les_Echos_Champions2023_Logo_FR_blanche.webp" alt="les champion 2023" />
        </div>
        <div className='text-white text-4xl'>
          <p>Double lauréat du classement</p>
          <p>Les Echos : Les Champions De la Croissance !</p>
        </div>
        <div>
          <p className='text-violet-400 text-8xl font-bold'>#CDC</p>
        </div>
      </div>
    </div>
  )
}
