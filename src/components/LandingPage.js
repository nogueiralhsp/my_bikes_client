import React from 'react'
import LoginForm from './LoginForm';
import LandingPageImage from '../pictures/0beb0985-d14f-46a0-abfb-25ad22e85123.jpeg'

const LandingPage = () => (


     <div className='landing-page'>
          <div className='landing-page__header'>
               <h1>My Bike</h1>
          </div>

          <div className='landing-page__layout'>

               <div className='landing-page__content'>
                    <img className= 'landing-page__content__img'src= {LandingPageImage} alt="a coubple on the bike" />
               </div>

               <div className='landing-page__content'>

                    <LoginForm />

               </div>
          </div>


     </div>


);

export default LandingPage