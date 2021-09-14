import React from 'react'
import './style.scss'
import { CgSearch } from 'react-icons/cg'
import { MdShoppingBasket } from 'react-icons/md'

export const Header = () => {
  return (
    <header className="header">
      <img
        alt="Logo's Amazon"
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__search">
        <input className="header__search-input" type="text" />
        <CgSearch className="header__search-icon" size="1.7rem" />
      </div>

      <div className="header__nav">
        <div className="header__nav-option">
          <span className="header__nav-option-lineOne">Hello Guest</span>
          <span className="header__nav-option-lineTwo">Sign In</span>
        </div>
        <div className="header__nav-option">
          <span className="header__nav-option-lineOne">Return</span>
          <span className="header__nav-option-lineTwo">& Orders</span>
        </div>
        <div className="header__nav-option">
          <span className="header__nav-option-lineOne">Your</span>
          <span className="header__nav-option-lineTwo">Prime</span>
        </div>
        <div className="header__nav-optionBasket">
          <MdShoppingBasket size="1.5rem" />
          <span className="header__nav-optionBasket--count">0</span>
        </div>
      </div>
    </header>
  )
}
