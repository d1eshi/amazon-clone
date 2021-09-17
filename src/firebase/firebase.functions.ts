import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { History } from 'history'

import * as type from '../types'

import { auth } from './firebase'

export const createNewUser = (email: string, password: any, history: History) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential: {}) => {
      history.push('/')
    })
    .catch((error: any) => {
      const errorCode = error.code
      const errorMessage = error.message

      throw new Error(`Error: ${errorCode}. Message: ${errorMessage}`)
    })
}

export const signIn = (email: string, password: any, history: History) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential: {}) => {
      history.push('/')
    })
    .catch((error: any) => {
      const errorCode = error.code
      const errorMessage = error.message

      throw new Error(`Error: ${errorCode}. Message: ${errorMessage}`)
    })
}

export const userState = (dispatch: type.Dispatch) =>
  onAuthStateChanged(auth, user => {
    console.log('the user is >>>', user)

    if (user) {
      // User is signed in.
      dispatch({ type: '@user/set-state', payload: user })
    } else {
      // No user is signed in.
      dispatch({ type: '@user/set-state', payload: null })
    }
  })

export const signOutUser = () =>
  signOut(auth)
    .then(() => console.log('signed out'))
    .catch(error => {
      throw new Error(`Error: ${error.code}. Message: ${error.message}`)
    })
