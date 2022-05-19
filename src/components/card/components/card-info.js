import React from 'react';
import styled from 'styled-components';

export const CardInfo = ({ data }) => {
  return (
    <CardInfoContainer>
      <Name>{data.name}</Name>
      <Description>
        {data.description}
      </Description>
    </CardInfoContainer>
  );
};

const CardInfoContainer = styled.div`
  color: #FFFFFF;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
`;
const Name = styled.h4`
  display: -webkit-box;
  margin: 0 0 7px;
  color: #FFFFFF;
  font-size: 30px;
  line-height: 36px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media all and (min-width: 1100px) {
    font-size: 36px;
    line-height: 46px;
  }
`;
const Description = styled.div`
    display: -webkit-box;
    margin-bottom: 12px;
    font-size: 15px;
    line-height: 18px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;