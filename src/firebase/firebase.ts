/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCLBa0phjdk_FD3nqMdzWomRH6wNkfXr_M',
  authDomain: 'clone-37bfb.firebaseapp.com',
  projectId: 'clone-37bfb',
  storageBucket: 'clone-37bfb.appspot.com',
  messagingSenderId: '140401943815',
  appId: '1:140401943815:web:df8e8dbc6549f793b951a2',
}

const app = initializeApp(firebaseConfig)

// const db = getFirestore(app)
const auth = getAuth()

export { auth }