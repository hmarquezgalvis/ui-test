import React from 'react'

import { CARD_TYPE } from '../../types/card';
import { CardDefaultItem } from './card-default-item'
import { CardListItem } from './card-list-item'

export const Card = ({ item, updateVote = () => {}, type = CARD_TYPE.GRID_ITEM }) => {
  const Component  = type === CARD_TYPE.GRID_ITEM ? CardDefaultItem : CardListItem;
  return (
    <Component key={item.guid} data={item} updateVote={updateVote} />    
  )
}
