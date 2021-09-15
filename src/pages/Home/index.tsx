import React from 'react'

import './style.scss'
import { Product } from '../../components/Product'
import db from '../../db.json'

export const Home: React.FC = () => {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          alt=""
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
      </div>

      <div className="home__products">
        {
          db.map(product => 
            <Product key={product.id} {...product} /> )
        }
      </div>
    </div>
  )
}
