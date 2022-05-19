import React, { useContext } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { RoulingContext } from '../contexts/rouling.context';
import { RESULT_LAYOUT_GRID } from '../hooks/use-rouling-filter';
import { CardListHeader } from './card-header';
import { CARD_TYPE } from '../../types/card';
import { Card } from '../card';

export const CardList = () => {
  const { 
    results, 
    updateVote,
    layout, 
  } = useContext(RoulingContext);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 767px)' });
  const showAsGrid = layout === RESULT_LAYOUT_GRID || isSmallScreen;
  const cardType = showAsGrid ? CARD_TYPE.GRID_ITEM : CARD_TYPE.LIST_ITEM;
  
  return (
    <>
      <CardListHeader 
        title="Previous Rulings"
        showModeSelector={!isSmallScreen}
      />
      <CardListContainer 
        showAsGrid={showAsGrid}
      >
        {results && results.map((item, index) => (
          <Card key={item.guid} item={item} updateVote={updateVote} type={cardType} />
        ))}
      </CardListContainer>
    </>
  );
};

const CardListContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 12px;
  overflow: scroll hidden;
  scroll-snap-type: x mandatory;

  & > div {
    scroll-snap-align: start;
  }

  @media all and (min-width: 768px) {
    display: grid;
    grid-template-columns: ${(props) => props.showAsGrid ? '1fr 1fr' : '1fr'};
    gap: 21px;
    overflow: hidden;
  }

  @media all and (min-width: 1100px) {
    grid-template-columns: ${(props) => props.showAsGrid ? '1fr 1fr 1fr' : '1fr'};
    gap: 28px;
  }
`;