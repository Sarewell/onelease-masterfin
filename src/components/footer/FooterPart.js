import React from 'react'
import { NavigationData } from '../data/NavigationData'
import { Link } from 'react-router-dom'

export default function FooterPart() {
  return (
    <div className='bg-gradient-to-b from-gray-500 to-gray-700 text-white flex justify-evenly'>
        <div className='p-4'>
            <img src="/img-one-lease/layout/logo sans fond.webp" alt="" className='p-4' />
            <ul className='underline p-4'>
                {NavigationData.map((item) => (
					<Link to={item.url} key={item.id}>
						<li >{item.name}</li>
					</Link>
				))}
            </ul>
            <ul className='underline p-4'>
                <li>Mention légales</li>
                <li>Politique de confidentialité</li>
            </ul>
        </div>
        <div className='p-4 text-center'>
            <div className='p-4 text-center'>
                <h3 className='uppercase pb-2'>suivez-nous</h3>
                    <div className='flex space-x-2 rounded-lg justify-center'>
                        <img src="/img-one-lease/layout/logo-linkedin.webp" alt="linkedin" />
                        <img src="/img-one-lease/layout/logo-de-lapplication-facebook.webp" alt="facebook" />
                        <img src="/img-one-lease/layout/instagram.webp" alt="imstagram" />
                        <img src="/img-one-lease/layout/signe-twitter.webp" alt="twiter" />
                    </div>
            </div>
            <div className='p-4 '>
                <h3 className='uppercase pb-2'>l'app</h3>
                    <div className='flex space-x-2 p-2 justify-center'>
                        <img src="/img-one-lease/layout/app store.webp" alt="app store" />
                        <img src="/img-one-lease/layout/Logo-disponible-Google-Play.webp" alt="play store" />
                    </div>
                    <p className='underline p-2'>contact@one-lease.fr</p>
                    <div className='flex space-x-1 p-2'>
                        <p>Adhérant au sindicat des loueurs </p>
                        <img src="/img-one-lease/layout/logo-sesam-lld.webp" alt="" />
                    </div>
                    
            </div>
        </div>
        

    </div>
  )
}

