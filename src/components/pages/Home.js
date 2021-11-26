import React from 'react';
import '../../App.css';
import Card from '../Card';
import HeroSection from '../HeroSection';
import Pricing from '../cardComponent/Pricing'
import Section from '../section/Section';
import Banner from '../banner/Banner';

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

const bannerObjOne ={
  bgImg :'/images/hands.jpg',
  heading: 'LoremIpsum',
  title: 'LoremIpsum',
  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, \' +\n' +
      '        \'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\' +\n' +
      '        \' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi. ',
  buttonLabel:'SignUp',
  lightText:false,
}

function Home() {
  return (
    <>
      <HeroSection />
      <Section {...homeObjOne} />
      <Banner {...bannerObjOne} />
      <Section {...homeObjOne} />
      <Card/>
      <Pricing />    
    </>
  );
}

export default Home;