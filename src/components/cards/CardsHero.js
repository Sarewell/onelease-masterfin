import React from 'react'
import { Link } from 'react-router-dom'
import "./CardsHero.css"

function CardsHero({content,title,url_img,id}) {
  return (
    <div className='container'>
      <Link to={`/post/${id}`}> 
        <img src={url_img} alt=''className='' />
        <h3>{title}</h3>
        <p>{content}</p>
        </Link>
    </div>
  )
}
export default CardsHero
