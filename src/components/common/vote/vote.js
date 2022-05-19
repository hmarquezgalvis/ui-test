import React from 'react';
import styled from 'styled-components';
import { ThumbDownIcon, ThumbUpIcon } from '../icons/thumbs';

export const VoteButton = ({ children, thumbDown = false, selected = false, value = null, onClick = () => {} }) => {
  const toggle = () => {
    onClick(value);
  };

  return (
    <ButtonContainer
      selected={selected}
      thumbDown={thumbDown}
      onClick={() => toggle(value)}
    >
      {thumbDown ? <Vote.ThumbDown /> : <Vote.ThumbUp />}
    </ButtonContainer>
  );
};
VoteButton.ThumbUp = ThumbUpIcon;
VoteButton.ThumbDown = ThumbDownIcon;

export const Vote = ({ children, thumbDown = false, value = null, onClick = () => {} }) => {
  return (
    <NormalContainer thumbDown={thumbDown}>
      {thumbDown ? <Vote.ThumbDown /> : <Vote.ThumbUp />}
    </NormalContainer>
  );
};
Vote.ThumbUp = ThumbUpIcon;
Vote.ThumbDown = ThumbDownIcon;

const ButtonContainer = styled.button`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border: 2px solid ${props => props.selected ? '#ffffff' : 'transparent' };
  background: ${props => props.thumbDown ? "rgba(251, 189, 74, 1)" : "rgba(60, 187, 180, 0.8)" };
  cursor: pointer;
`;

const NormalContainer = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  background: ${props => props.thumbDown ? "rgba(251, 189, 74, 1)" : "rgba(60, 187, 180, 0.8)" };
  cursor: default;
`;