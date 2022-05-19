import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { ThumbDownIcon, ThumbUpIcon } from '../icons/thumbs';
import { getPercentage } from '../../../helpers/getPercentage';

export const VoteProgressBar = ({ positive = 0, negative = 0}) => {
  const initial = { positive, negative };
  const [{ positive: thumbUp, negative: thumbDown }, setPercents] = useState(initial);

  useEffect(() => {
    const total = positive + negative;
    if (total !== 0) {
      setPercents({
        positive: getPercentage(positive, total, 2),
        negative: getPercentage(negative, total, 2),
      });
    }
  }, [positive, negative]);

  return (
    <VoteProgressBarContainer middle={thumbUp}>
      <ProgressBarItem>
        <ThumbUpIcon altText='Thumbs Up' />
        <Label>{thumbUp}%</Label>
      </ProgressBarItem>
      <ProgressBarItem>
        <Label>{thumbDown}%</Label>
        <ThumbDownIcon altText='Thumbs Down' />
      </ProgressBarItem>
    </VoteProgressBarContainer>
  );
};

const VoteProgressBarContainer = styled.div`
  display: flex;
  width: 100%;
  color: #FFFFFF;
  font-size: 18px;
  line-height: 22px;
  background: ${props => `linear-gradient(90deg, 
    rgba(60, 187, 180, 0.6) 0%, 
    rgba(60, 187, 180, 0.6) ${props.middle}%, 
    rgba(249, 173, 29, 0.6) ${props.middle}%, 
    rgba(249, 173, 29, 0.6) 100%)`};
`;
const ProgressBarItem = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  padding: 7px 12px;
  &:last-child {
    justify-content: end;
  }
`;
const Label = styled.span`
  margin: 0 5px;
`;
