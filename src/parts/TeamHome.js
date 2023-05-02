import React from 'react'
import ButtonParts from '../components/button/ButtonParts'


export default function TeamHome() {
  return (
    <div className='mx-auto pageMargin'>
        <h2 className='text-4xl text-center p-12 font-bold'>ILS NOUS FONT CONFIANCE, <span className='text-violet-400'>VOUS SAVEZ</span><p>MAINTENANT POURQUOI !</p></h2>
        <div className='flex space-x-6 justify-evenly p-16 lg:block lg:text-center lg:mx-auto'>
            <img src="/img-one-lease/home/Canon Medical_HD.webp" alt="" className='rounded-lg' />
            <img src="/img-one-lease/home/logo-davidson.webp" alt="" className='rounded-lg'/>
            <img src="/img-one-lease/home/Copy of devoteam_rgb (1).webp" alt="" className='rounded-lg'/>
            <img src="/img-one-lease/home/logo-bleu-larosée.webp" alt="" className='rounded-lg'/>
            <img src="/img-one-lease/home/migUy5y5_400x400.webp" alt="" className='rounded-lg'/>
        </div>
        <hr className='h-1 bg-violet-900 w-48 m-auto'/>
        <h2 className='text-4xl text-center p-12 font-bold'>DÉCOUVREZ TOUTE <span className='text-violet-400'>LA ONE TEAM EN PHOTO !</span></h2>
        <div className='flex space-x-6 justify-evenly p-16 lg:block lg:text-center lg:mx-auto'>
            <img src="/img-one-lease/home/IMG_8930.webp" alt="" className='rounded-lg' />
            <img src="/img-one-lease/home/IMG_8892.webp" alt="" className='rounded-lg'/>
            <img src="/img-one-lease/home/IMG_8953.webp" alt="" className='rounded-lg'/>
            <img src="/img-one-lease/home/photo (1).webp" alt="" className='rounded-lg'/>
            <img src="/img-one-lease/home/IMG_9013.webp" alt="" className='rounded-lg'/>
            <img src="/img-one-lease/home/Photo Gauthier_jfif.webp" alt="" className='rounded-lg'/>
            <img src="/img-one-lease/home/IMG_8012.webp" alt="" className='rounded-lg'/>
            <img src="/img-one-lease/home/IMG_8900.webp" alt="" className='rounded-lg'/>
        </div>
        <div className='flex justify-center py-16'>
          <ButtonParts 
          title='voir+'
        />
        
        </div>
        
        
    </div>
  )
}
