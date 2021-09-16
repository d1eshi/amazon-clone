import React from 'react'

const initialState = {
  basket: [],
}

type Action =
  | { type: '@basket/add-item'; payload: Item }
  | { type: '@basket/remove-item'; payload: string }
  | { type: undefined; payload: undefined }
type Item = { id: string; title: string; price: number; rating: number; image: string }
type Dispatch = (action: Action) => void
type State = { basket: Array<Item> }
type StateProviderProps = { children: React.ReactNode }

const StateContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(
  undefined
)

function stateReducer(state: State, action: Action) {
  switch (action.type) {
    case '@basket/add-item':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      }
    case '@basket/remove-item': {
      const index = state.basket.findIndex(item => item.id === action.payload)

      const newBasket = [...state.basket]

      if (index >= 0) newBasket.splice(index, 1)
      else console.warn(`Can't remove product (id: ${action.payload}) as it's not in basket!`)

      return { ...state, basket: newBasket }
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

function StateProvider({ children }: StateProviderProps) {
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
