import React from 'react'

type Action =
  | { type: '@basket/add-item'; payload: Item }
  | { type: '@basket/remove-item'; payload: string }
  | { type: '@user/set-state'; payload: any }
  | { type: undefined; payload: undefined }
type Item = { id: string; title: string; price: number; rating: number; image: string }
type Dispatch = (action: Action) => void
type State = { basket: Array<Item>; user: any }
type StateProviderProps = { children: React.ReactNode }

export type { Action, Item, Dispatch, State, StateProviderProps }
