import React, { useState } from 'react';
import styled from 'styled-components';

export const DropDown = ({ value,  options = [], onSelected = () => {} }) => {
  const [isActive, setIsActive] = useState(false);

  const toggling = () => setIsActive(!isActive);

  const changeSelected = (item) => {
    setIsActive(false);
    onSelected(item);
  };

  return (
    <DropDownContainer>
      <DropDownSelected 
        data-testid="dropdown-value"
        className='current'
        onClick={() => toggling()}
      >
        {value} <span className='chevron'></span>
      </DropDownSelected>
      {isActive && (
        <DropDownList data-testid="dropdown-list">
          {options.map(item => (
            <DropDownListItem
              key={item}
              onClick={() => changeSelected(item)}
            >
              {item}
            </DropDownListItem>
          ))}
        </DropDownList>
      )}
    </DropDownContainer>
  )
};

const DropDownContainer = styled.div`
  position: relative;
  font-size: 10px;

  @media (min-width: 1100px) {
    font-size: 13px;
  }
`;

const DropDownSelected = styled.div`
  position: relative;
  padding: 6px;
  min-width: 128px;
  border: 2px solid #333333;

  @media (min-width: 1100px) {
    padding: 8px;
  }
`;

const DropDownList = styled.ul`
  position: absolute;
  left: 0;
  right: 0;
  background: #ffffff;
  z-index: 1;
`;

const DropDownListItem = styled.li`
  padding: 6px;
  border-width: 0 2px 2px 2px;
  border-style: solid;
  border-color: #333333;
  cursor: pointer;
`;
