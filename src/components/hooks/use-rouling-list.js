import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRulingList } from '../services/get-rulings';
import { setRoulingList } from '../../reducers/rouling.reducer';
import { toggleVote } from '../../reducers/my-votes.reducer';

export const useRoulingFetch = () => {
  const results = useSelector((state) => state.roulings.items);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const data = await getRulingList();
      dispatch(setRoulingList(data));
      console.log('useEffect', data);
    };
    fetchData();
  }, [dispatch]);

  const updateVote = (guid, value) => {
    dispatch(toggleVote({ guid, value }));
  };

  return {
    results,
    updateVote,
  };
};