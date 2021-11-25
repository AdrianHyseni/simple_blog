import React from 'react'
import CardItem from './CardItem'
import './Card.css'

function Card() {
    return (
        <div className='cards'>
          <h1>Let's see through the life of other people!</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='/images/hands.jpg'
                  text='Explore the hidden waterfall deep inside the Amazon Jungle'
                  label='Drama'
                  path='/services'
                />
                <CardItem
                  src='images/mirror-boy.jpg'
                  text='Travel through the Islands of Bali in a Private Cruise'
                  label='Tragedy'
                  path='/services'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem
                  src='images/people.jpg'
                  text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                  label='Mystery'
                  path='/services'
                />
                <CardItem
                  src='images/portrait.jpg'
                  text='Experience Football on Top of the Himilayan Mountains'
                  label='Real Life'
                  path='/products'
                />
                <CardItem
                  src='images/shadowed.jpg'
                  text='Ride through the Sahara Desert on a guided camel tour'
                  label='Mystery'
                  path='/sign-up'
                />
              </ul>
            </div>
          </div>
        </div>
      );
}

export default Card
