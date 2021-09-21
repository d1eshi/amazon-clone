import * as type from '../types'

export function stateReducer(state: type.State, action: type.Action): type.State {
  switch (action.type) {
    case '@basket/add-item':
      return {
        ...state,
        basket: [...state.basket, action.payload],
      }
    case '@basket/remove-item': {
      const index = state.basket.findIndex((item: { id: string }) => item.id === action.payload)

      const newBasket = [...state.basket]

      if (index >= 0) newBasket.splice(index, 1)
      else console.warn(`Can't remove product (id: ${action.payload}) as it's not in basket!`)

      return { ...state, basket: newBasket }
    }

    case '@basket/clear-basket':
      return { ...state, basket: [] }

    case '@user/set-state':
      return { ...state, user: action.payload }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
