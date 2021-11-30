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
                  src='/images/sleepcinema.jpg'
                  text='To the deepest part of sleepness movie where the dreams are part of reality'
                  label='Drama'
                  path='/services'
                />
                <CardItem
                  src='images/wallpaint.jpg'
                  text="Painting the wall with the darknes of the city's sorrow"
                  label='Tragedy'
                  path='/services'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem
                  src='images/come.jpg'
                  text='Whene you find a gentel hand in the darkness days'
                  label='Mystery'
                  path='/services'
                />
                <CardItem
                  src='images/half.jpg'
                  text='Half to half between life and death'
                  label='Real Life'
                  path='/products'
                />
                <CardItem
                  src='images/shadowed.jpg'
                  text='Why me ?'
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
