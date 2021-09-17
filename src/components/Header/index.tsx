import React from 'react'
import './style.scss'
import { CgSearch } from 'react-icons/cg'
import { MdShoppingBasket } from 'react-icons/md'
import { Link } from 'wouter'

import { useState } from '../../context/useStateProvider'

export const Header: React.FC = () => {
  const {
    state: { basket },
  } = useState()

  return (
    <header className='header'>
      <Link href='/'>
        <img
          alt='Logo Amazon'
          className='header__logo'
          src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
        />
      </Link>

      <div className='header__search'>
        <input className='header__search-input' type='text' />
        <CgSearch className='header__search-icon' size='1.7rem' />
      </div>

      <div className='header__nav'>
        <Link href='/login'>
          <div className='header__nav-option'>
            <span className='header__nav-option-lineOne'>Hello Guest</span>
            <span className='header__nav-option-lineTwo'>Sign In</span>
          </div>
        </Link>
        <div className='header__nav-option'>
          <span className='header__nav-option-lineOne'>Return</span>
          <span className='header__nav-option-lineTwo'>& Orders</span>
        </div>
        <div className='header__nav-option'>
          <span className='header__nav-option-lineOne'>Your</span>
          <span className='header__nav-option-lineTwo'>Prime</span>
        </div>
        <Link href='/checkout'>
          <div className='header__nav-optionBasket'>
            <MdShoppingBasket size='1.5rem' />
            <span className='header__nav-optionBasket--count'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </header>
  )
}
