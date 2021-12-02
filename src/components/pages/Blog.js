import React from 'react'
import '../../App.css'
import Card from '../cardComponent/Card'
import Banner from '../banner/Banner'
import Section from '../section/Section'
import {blogObjOne,bannerObjOne} from './Content/BlogContent.js'


function Product() {
    return(
    <div className='container'>
        <Banner {...bannerObjOne} />
        <Section{ ...blogObjOne}/>
        <Card />``
      </div>
)
}

export default Product
