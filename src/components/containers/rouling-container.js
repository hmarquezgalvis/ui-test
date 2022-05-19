import React from 'react'
import { CardList } from '../card-list/card-list';
import { RoulingProvider } from '../contexts/rouling.context';

export const RoulingContainer = () => {
  return (
    <RoulingProvider>
      <CardList />
    </RoulingProvider>
  );
};