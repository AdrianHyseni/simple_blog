import React from 'react'
import '../../App.css'
import Card from '../cardComponent/Card'
import Banner from '../banner/Banner'
import Section from '../section/Section'

const homeObjOne ={
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Lorem Ipsum',
    headLine:'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' +
        ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    imgStart:'',
    img: '/images/hands.jpg',
    alt:'Credit Card',
    buttonLabel:'Go'
  
  }


function Product() {
    return(
    <div>
        <Banner />
        <Section{ ...homeObjOne}/>
        <Card />``
      </div>
)
}

export default Product
