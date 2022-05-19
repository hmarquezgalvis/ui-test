import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { CardInfo } from './components/card-info';
import { CardBackground, thumbAlignment } from './components/card-background';
import { VoteBox } from '../common/vote-box/vote-box';
import { VoteProgressBar } from '../common/vote-progress-bar/vote-progress-bar';
import { TimeAndCategory } from './components/time-category';

export const CardListItem = ({ data, updateVote = () => {} }) => {
  const votes = useSelector(state => state.profile.votes);
  const isVoted = votes.some(x => x.guid === data.guid);

  return (
    <CardContainer>
      <CardBackground data={data} thumbAlign={thumbAlignment.TOP} />
      <CardBody>
        <BodyWrapper>
          <CardInfo data={data} />
          <CardAdditionalInfo>
            <TimeAndCategory data={data} />
            <VoteBox 
              guid={data.guid}
              voted={isVoted}
              updateVote={updateVote} 
            />
          </CardAdditionalInfo>
        </BodyWrapper>
        <VoteProgressBar {...data.votes} />
      </CardBody>
    </CardContainer>
  )
};

const CardContainer = styled.div`
  position: relative;
  width: auto;
  height: 150px;
  overflow: hidden;
  background: linear-gradient(90deg, 
    rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, 
    rgba(51, 51, 51, 0.6) 71.88%), #dddddd;
  height: 150px;

  @media all and (min-width: 1100px) {
    height: 170px;
  }

  & > div:first-child {
    width: 175px;
    height: 100%;

    @media all and (min-width: 768px) {
      width: 25%;
    }
  }
`;

const CardBody = styled.div`
  position: absolute;
  top: 0;
  bottom: 0%;;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    90deg, 
    rgba(0, 0, 0, 0.0001) 12%, 
    #888888 23.70%, 
    #666666 53.91%,
    rgba(51, 51, 51, 0.6) 75.79%
  );
`;
const CardAdditionalInfo = styled.div`
  padding-top: 10px;
  margin-right: 12px;
`;
const BodyWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 230px;
  padding-left: 21%;
`;