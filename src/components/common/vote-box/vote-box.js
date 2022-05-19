import React, { useState } from 'react';
import styled from 'styled-components';

import { VoteButton } from '../vote/vote';

export const VoteBox = ({ guid, voted = false, updateVote = () => {} }) => {
  const values = {
    thumbUp: 1,
    thumbDown: -1,
  };
  const [selected, setSelected] = useState(null);

  const onVoteSelected = (value) => {
    if (selected === value) {
      setSelected(null);
      return;
    }
    setSelected(value);
  };
  const isActive = (value) => value === selected;
  const voteNowIsDisabled = selected === null;

  return (
    <VoteBoxContainer>
      {voted ? (
        <Button
          onClick={() => { updateVote(guid, null); setSelected(null); }}
        >Vote Again</Button>
      ) : (
        <>
          <VoteButton
            selected={isActive(values.thumbUp)}
            value={values.thumbUp}
            onClick={onVoteSelected} /><VoteButton
            thumbDown
            selected={isActive(values.thumbDown)}
            value={values.thumbDown}
            onClick={onVoteSelected}
          >
            <VoteButton.ThumbDown />
          </VoteButton>
          <Button
            disabled={voteNowIsDisabled}
            onClick={() => updateVote(guid, selected)}
          >Vote Now</Button>
        </>
      )}
    </VoteBoxContainer>
  );
};

const VoteBoxContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 12px;
  color: #FFFFFF;
`;

const Button = styled.button`
  min-width: 100px;
  height: 38px;
  color: #FFFFFF;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  vertical-align: middle;
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid #FFFFFF;
  cursor: pointer;

  &:disabled {
    cursor: default;
    color: #999999;
  }
`;