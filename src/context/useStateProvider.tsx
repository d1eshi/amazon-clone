import React from 'react'

import * as type from '../types'

import { stateReducer } from './stateReducer'

const initialState = {
  basket: [],
  user: null,
}

const StateContext = React.createContext<
  { state: type.State; dispatch: type.Dispatch } | undefined
>(undefined)

function StateProvider({ children }: type.StateProviderProps) {
  const [state, dispatch] = React.useReducer(stateReducer, initialState)
  const value = { state, dispatch }

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>
}

function useState() {
  const context = React.useContext(StateContext)

  if (context === undefined) {
    throw new Error('useState must be used within a StateProvider')
  }

  return context
}

export { StateProvider, useState }
