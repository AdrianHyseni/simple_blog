import React from 'react';
import '../../App.css';
import Card from '../cardComponent/Card';
import HeroSection from '../banner/HeroSection';
import TriCards from '../cardComponent/TriCards'
import Section from '../section/Section';
import Banner from '../banner/Banner';
import {homeObjOne, homeObjTwo,bannerObjOne,tripleCards} from './Content/HomeContent'



function Home() {
  return (
    <>
    <div className='home'>
      <HeroSection />
      <Section {...homeObjOne} />
      <Banner {...bannerObjOne} />
      <Section {...homeObjTwo} />
      <Card/>
      <TriCards {...tripleCards} /> 
    </div>
       
    </>
  );
}

export default Home;