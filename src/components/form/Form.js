import React from 'react'
import ButtonParts from '../button/ButtonParts'

export default function Form() {
  return (
    <div className=' bg-gradient-to-b from-gray-500 to-gray-700 md:container md:mx-auto p-10 '>
      <h2 className='text-center font-bold text-3xl uppercase'>Contactez-nous</h2>
        <form action="" method="post" className='flex g border-solid border-violet-600 rounded-l m-8 p-2 justify-center bg-white lg:block lg:text-center lg:mx-auto'>
            
            <div className='border-solid border-violet-600 rounded-l'>
            
              <p><input type="text" placeholder='prénom*' className='border border-violet-700 rounded-lg m-4 p-2'  /></p>
              <p><input type="text" placeholder='Nom*' className='border border-violet-700 rounded-lg m-4 p-2'/></p>
              <p><input type="text" placeholder='Email*' className='border border-violet-700 rounded-lg m-4 p-2'/></p>
              <p><input type="text" placeholder='Téléphone*' className='border border-violet-700 rounded-lg m-4 p-2'/></p>
              <p><input type="text" placeholder='Société*' className='border border-violet-700 rounded-lg m-4 p-2'/></p>

            </div>
            <div>
                <p>Taille de votre flotte</p>
                <p><input type="radio" name="" id="" className='border border-violet-700 rounded-lg m-4 p-2'/><span>entre 10 et 50 véhicules</span></p>
                <p><input type="radio" name="" id="" className='border border-violet-700 rounded-lg m-4 p-2'/><span>entre 50 et 250 véhicules</span></p>
                <p><input type="radio" name="" id="" className='border border-violet-700 rounded-lg m-4 p-2'/><span>+ de 250 véhicules</span></p>
                <label htmlFor="" >Message*</label>
                <input type="text-area" placeholder='message*' className='block border border-violet-700 rounded-lg m-4 p-2'/>
                {/* <button className='bg-violet-700 p-4 rounded-lg text-white'>envoyer</button> */}
                <ButtonParts
                title='envoyer'/>
            </div>
            
        </form>
    </div>
  )
}
