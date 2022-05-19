import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { CardInfo } from './components/card-info';
import { CardBackground } from './components/card-background';
import { VoteBox } from '../common/vote-box/vote-box';
import { VoteProgressBar } from '../common/vote-progress-bar/vote-progress-bar';
import { TimeAndCategory } from './components/time-category';

export const CardDefaultItem = ({ data, updateVote = () => {} }) => {
  const votes = useSelector(state => state.profile.votes);
  const isVoted = votes.some(x => x.guid === data.guid);

  return (
    <CardContainer>
      <CardBackground data={data} />
      <CardBody>
        <CardBodyWrapper>
          <CardInfo data={data} />
          <TimeAndCategory data={data} />
          <VoteBox 
            guid={data.guid}
            voted={isVoted}
            updateVote={updateVote} 
          />
        </CardBodyWrapper>
        <VoteProgressBar {...data.votes} />
      </CardBody>
    </CardContainer>
  )
};

const CardContainer = styled.div`
  position: relative;
  flex: 1 0 300px;
  height: 300px;
  overflow: hidden;
  background: linear-gradient(180deg, 
    rgba(0, 0, 0, 0.0001) 0%, #888888 19.79%, #666666 50%, 
    rgba(51, 51, 51, 0.6) 71.88%), #dddddd;

  @media all and (min-width: 768px) {
    flex: auto;
    width: auto;
    height: 350px;
  }

  @media all and (min-width: 768px) {
    height: 350px;
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
  justify-content: end;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.6) 100%);
`;

const CardBodyWrapper = styled.div`
  margin-left: 35px;
  margin-right: 35px;
`;