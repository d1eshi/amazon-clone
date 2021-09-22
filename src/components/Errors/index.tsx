import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

interface propsCart {
  noLogin: boolean
}
export const ErrorCart: React.FC<propsCart> = ({ noLogin }) => {
  console.log(noLogin)

  return (
    <div className='error-cart'>
      <h1>Your Amazon Cart is empty</h1>
      {!noLogin ? (
        <>
          <Link to='/login'>Sign in to your account</Link>
          <Link to='/login'>Sign up now</Link>
        </>
      ) : (
        <Link to='/'>See products</Link>
      )}
    </div>
  )
}
