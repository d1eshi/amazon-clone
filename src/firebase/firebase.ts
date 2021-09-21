/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

import { firebaseConfig } from './firebase.utils'

initializeApp(firebaseConfig)

const auth = getAuth()
const db = getFirestore()

export { auth, db }
