/* eslint-disable no-undef */
import React from 'react'
import CardsTeam from '../cards/CardsTeam';
import { dataTeam } from '../data/dataTeam';
import CardBack from '../cards/CardBack';
import Layouts from '../layout/Layout';
import "./TeamPage.css"

function TeamsPage(id,url_img, title,subtitle, desc, content) {
  return (
    <Layouts>
      <div>     
      <div className="text-center py-4 ">
        <h1 className="font-semibold text-[#57007f] uppercase text-4xl py-3">
          Découvrez la one team
        </h1>
        <hr className="w-40 m-auto h-1  bg-[#57007f]"></hr>
        <h3 className="italic font-normal text-lg pt-2">
          de <span className="font-bold text-sky-200">A à T</span>
        </h3>
      </div>
      <div className="flex justify-center  flex-wrap gap-8 my-4 mx-4  px-12 ">
        {dataTeam.map((item, index) => (
          <CardsTeam
            key={index.id}
            url_img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            desctitle={item.desctitle}
            desc={item.desc}
            contenttitle={item.contenttitle}
            content={item.content}
          />
        ))}
      </div>
      <div className=''>
        <hr className="w-48 m-auto h-1  bg-[#57007f]"></hr>
        <CardBack />
      </div>  
    </div>
  </Layouts>
  );
}
export default TeamsPage
