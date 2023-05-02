import React from 'react'
import "./HomePage.css"
import CardsHero from '../cards/CardsHero';
import { dataHero } from '../data/dataHero';
import SectionForm from '../../parts/SectionForm';
import SectionBlueBg from '../../parts/SectionBlueBg';
import CardBack from '../cards/CardBack';
import Button from '../button/Button';
import Layouts from '../layout/Layout';
import ButtonParts from '../button/ButtonParts';
import ButtonTwo from '../button/ButtonTwo';
import TeamHome from '../../parts/TeamHome';
import SectionServicesHome from '../../parts/SectionServicesHome';


function HomePage() {
  return (
    <Layouts> 
      <div>
        <main className=''>
          <section id="hero" class="flexcenter pb-20">
            <div className="hight_hero pageMargin">
              <div id="text" class="flex-box">
                <h2>Entrez dans une nouvelle relation avec votre loueur LLD!</h2>
                <hr className="w-44 ml-6 h-1 bg-white"></hr>
                <p>
                  ONE LEASE se met à votre service , vous répond vous conselille
                  et surtoutvous accompagne.
                </p>
                <p>
                  Vivez l'expérience Client First, que vpus soyez gestionnaire de
                  flotte ou conducteur!
                </p>
                <div className='btn'> 
                  {/* <Button
                  title="Contactez-Nous"
                  />  */}
                  <ButtonParts
                  title='contactez-nous' />

                  {/* <ButtonTwo
                  toto='Accès client' /> */}
                </div>  
              </div>
              <div class="phone">
                <img
                  src="/img-one-lease/home/telephone.png"
                  alt=""
                  className="h-6 m-1"
                />
                <h2 className="text-white"> 01.85.74.78.00</h2>
              </div>
            </div>
            <div className="flex pageMargin">
              {dataHero.map((item, index) => (
                <CardsHero
                  key={index}
                  img
                  src={item.url_img}
                  alt=""
                  title={item.title}
                  content={item.content}
                />
              ))}
            </div>
          </section>
          <section id="services">
            <div className="bg-black text-white font-semibold text-size text-4xl text-center py-10 uppercase ">
              <h2>Bienvenue dans la leasetech</h2>
            </div>
          </section>
          <SectionServicesHome/>
          <SectionBlueBg />
          <TeamHome/>
          <SectionForm />

          <CardBack />
        </main>
      </div>
      </Layouts>
  );
}
export default HomePage
