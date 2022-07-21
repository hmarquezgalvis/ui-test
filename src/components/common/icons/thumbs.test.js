import { render } from '@testing-library/react';
import { ThumbDownIcon, ThumbUpIcon } from './thumbs';

describe('Tests for Thumb Icons', () => {

  describe('should render and save the snapshot correctly', () => {
    it('Thumb Up Icon', () => {
      const { asFragment } = render(<ThumbUpIcon />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('Thumb Down Icon', () => {
      const { asFragment } = render(<ThumbDownIcon />);
      expect(asFragment()).toMatchSnapshot();
    });

  });

});