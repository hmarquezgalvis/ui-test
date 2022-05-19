import React from 'react';
import styled from 'styled-components';

import { Vote } from '../../common/vote/vote';

export const thumbAlignment = {
  CENTER: 'center',
  TOP: 'top',
}

export const CardBackground = ({ data, thumbAlign = thumbAlignment.CENTER }) => {
  const { votes } = data;
  const showThumbIcon = votes.positive !== votes.negative;
  const isThumbDown = votes.negative > votes.positive;
  return (
    <CardBackgroundContainer>
      {showThumbIcon && (
        <IconWrapper align={thumbAlign}>
          <Vote thumbDown={isThumbDown} />
        </IconWrapper>
      )}
      <CardBackgroundPhoto
        src={`./assets/photos/${data.picture}`}
        alt={data.name}
      />
    </CardBackgroundContainer>
  )
}

const CardBackgroundContainer = styled.div`
  position: relative;
`;

const CardBackgroundPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: top;
`;

const IconWrapper = styled.div`
  position: absolute;
  content: ${props => props.align};
  top: ${(props) => props.align === thumbAlignment.CENTER ? 'calc(42% - 30px)' : '0'};
  z-index: 1;

  @media all and (min-width: 768px) {
    top: ${(props) => props.align === thumbAlignment.CENTER ? 'calc(50% - 30px)' : '0'};
  }
`;