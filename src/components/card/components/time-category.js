import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

export const TimeAndCategory = ({ data }) => {
  const getTimeAgoString = (time) => {
    return moment(time).fromNow();
  }

  return (
    <TimeAndCategoryContainer>
      {getTimeAgoString(data.lastUpdated)} in <span>{data.category}</span>
    </TimeAndCategoryContainer>
  )
}

const TimeAndCategoryContainer = styled.div`
  color: #FFFFFF;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  margin-bottom: 12px;
  font-size: 12px;
  line-height: 14.4px;
  text-align: right;
`;
