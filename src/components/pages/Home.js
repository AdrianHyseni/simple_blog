import React from 'react';
import '../../App.css';
import Card from '../cardComponent/Card';
import HeroSection from '../banner/HeroSection';
import Pricing from '../cardComponent/Pricing'
import Section from '../section/Section';
import Banner from '../banner/Banner';


const homeObjOne ={
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Poem',
  headline:'Station',
  description: 'Days you are sick, we get dressed slow,'
  +'find our hats, and ride the train.'
  +'We pass a junkyard and the bay,'
  +'then a dark tunnel, then a dark tunnel.'
  
  +'You lose your hat. I find it. The train'
  +'sighs open at Burlingame,'
  +'past dark tons of scrap and water.'
  +'I carry you down the black steps.'
  
  +'Burlingame is the size of joy:'
  +'a race past bakeries, gold rings'
  +'in open black cases. I don’t care'
  +'who sees my crooked smile'
  
  +'or what erases it, past the bakery,'
  +'when you tire. We ride the blades again'
  +'beside the crooked bay. You smile.'
  +'I hold you like a hole holds light.'
  
  +'We wear our hats and ride the knives.'
  +'They cannot fix you. They try and try.'
  +'Tunnel! Into the dark open we go.'
  +'Days you are sick, we get dressed slow.'
  ,
  imgStart:'',
  img: '/images/curly.jpg',
  alt:'girl',
  buttonLabel:'Go'

}
const homeObjTwo ={
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Do I?',
  headline:'Master',
  description: 'I have'
  +"no master but always wonder,"
  +"what is making my master sad?"
  +"  Maybe I do not know him.",
  imgStart:'start',
  img: '/images/balerina.jpg',
  alt:'Credit Card',
  buttonLabel:'Go'

}

const bannerObjOne ={
  bgImg : '/images/peopple.jpg',
  heading: 'PROVERB',
  title: 'PROVERB',
  description: "A proverb is a short, pithy saying that expresses a traditionally held truth or piece of advice, based on common sense or experience."+
  "Nothing defines a culture as distinctly as its language, and the element of language that best encapsulates a society's values and beliefs is its proverbs",
  buttonLabel:'SignUp',
  lightText:false,
  buttonTheme:'dark'
}

function Home() {
  return (
    <>
    <div className='container'>
      <HeroSection />
      <Section {...homeObjOne} />
      <Banner {...bannerObjOne} />
      <Section {...homeObjTwo} />
      <Card/>
      <Pricing /> 
    </div>
       
    </>
  );
}

export default Home;