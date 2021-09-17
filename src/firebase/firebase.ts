/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

import { firebaseConfig } from './firebase.utils'

const app = initializeApp(firebaseConfig)

const auth = getAuth()

export { auth }
