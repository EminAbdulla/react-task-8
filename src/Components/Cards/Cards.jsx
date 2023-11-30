import React from 'react'
import Card from '../Card/Card'
import './Cards.css'
const Cards = ({data}) => {
  return (
    <div className='row'>
        {
            data.map((item,index)=>{
                return(<Card key={index} item={item}/>)
            })
        }
    </div>
  )
}

export default Cards