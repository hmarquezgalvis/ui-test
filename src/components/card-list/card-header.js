import React, { useContext } from 'react'
import styled from 'styled-components';
import { RoulingContext } from '../contexts/rouling.context';

import { DropDown } from '../common/dropdown/dropdown';

export const CardListHeader = ({ title, showModeSelector = true }) => {
  const {
    layout,
    setLayout,
    RESULT_LAYOUTS,
  } = useContext(RoulingContext);
  return (
    <HeaderContainer>
      <h2>{title}</h2>
      {showModeSelector && (
        <DropDown
          options={RESULT_LAYOUTS}
          value={layout}
          onSelected={(layout) => setLayout(layout)}
        />
      )}
    </HeaderContainer>
  )
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
  @media (min-width: 1100px) {
    margin-bottom: 36px;
  }
  h2 {
    margin: 0;
    color: #464646;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 24px;
    line-height: 29px;
    @media (min-width: 1100px) {
      font-size: 45px;
      line-height: 54px;
    }
  }
`;