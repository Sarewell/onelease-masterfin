import React from 'react'
import "./CardsTeam.css";

 function CardsTeam({title,subtitle, desctitle,desc,contenttitle, content,url_img}) {
  return (
    <div className='card'>
        <div className='upper-container '> 
            <div className='img-container'> 
                <img src={url_img} alt="" className='img-container'/>
            </div>
            <div className='text-container'> 
                <h2 >{title}</h2>
                <h3>{subtitle}</h3>
            </div>
        </div>
        <div className='lower-container'> 
                <div className='desc'> 
            <p>{desctitle}</p>
                </div>
            <p>{desc}</p>
                <div className='content'> 
            <p>{contenttitle}</p>
                </div>
            <p>{content}</p>
        </div> 
    </div>
  )
}
export default  CardsTeam;
