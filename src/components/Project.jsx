import React, { useState } from 'react'
import propTypes from 'prop-types'

function Project(props) {

  const [Purchased, setPurchased] = useState(false);
  const [Discount, setDiscount] = useState(props.price);


  function BuyProjects (Discount) {
    console.log(props.name," bought at ",Discount,"% discount");
    setPurchased(true);
  }

  function DiscountProjects(dis) {
    setDiscount(Discount - dis);
  }


  return (
    props.name && <div className='card'>
        <img src={props.image} alt="Wait to see" />
        <h3>{props.name}</h3>
        <p>${Discount}</p>
        <span>Rating : {props.rating}</span>
        {Purchased ? <p className='alr'>Successfully Purchased</p> : <button className='buy' onClick={()=> BuyProjects(20)}>Buy Now</button>}
        <button className='disc' onClick={()=>DiscountProjects(20)}>20% Discount</button>
        <button className='buy dlt' onClick={()=> props.Delete(props.id)}>Delete</button>
    </div>
  )
}

Project.propTypes = {
  name : propTypes.string

}

export default Project