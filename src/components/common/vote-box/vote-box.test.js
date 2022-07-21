import { render } from '@testing-library/react';
import { VoteBox } from './vote-box';

describe('Tests for <VoteBox />.', () => {

  describe('should render and save the snapshot correctly.', () => {

    it('default state', () => {
      const { asFragment } = render(
        <VoteBox />
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('voted state', () => {
      const { asFragment } = render(
        <VoteBox voted />
      );
      expect(asFragment()).toMatchSnapshot();
    });

  });

});