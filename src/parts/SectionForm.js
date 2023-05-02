import React from 'react'
import Form from '../components/form/Form'



export default function SectionForm() {
  return (
    <div className='pageMargin'>
      <Form />
        <div className='text-center m-8 text-2xl text-bold'>
          <p>VOUS VOULEZ EN VOIR <span className='text-violet-400'>ENCORE + ?</span></p>
          <p>SUIVEZ- <span className='text-violet-400'>NOUS !</span></p>
        </div>
        
        <div className='flex justify-center space-x-40 m-6'>
          <div className='text-center'>
            <img src="/img-one-lease/home/logo linkdin.webp" alt="" className='h-14 w-14 m-6'/>
            <p className='font-bold text-violet-800'>LE PLUS CORPORATE</p>
          </div>
          <div className='text-center'>
            <img src="/img-one-lease/home/Facebook_logo_(square).webp" alt="" className='h-14 w-14 m-6' />
            <p className='font-bold text-violet-800'>LE PLUS OLD SCHOOL</p>
          </div>
          <div className='text-center'>
            <img src="/img-one-lease/home/instagramlogo.webp" alt="" className='h-14 w-14 m-6' />
            <p  className='font-bold text-violet-800'>LES COULISSES</p>
          </div>
          <div className='text-center '>
            <img src="/img-one-lease/home/twitter.webp" alt="" className='h-14 w-14 m-6' />
            <p className='font-bold text-violet-800'>LE DÉLAISSÉ </p>
            <p>Mais si vous êtes nombreux,</p> <p>peut-être qu'on s'y mettra </p> 
          </div>
        </div>
    </div>
  )
}
