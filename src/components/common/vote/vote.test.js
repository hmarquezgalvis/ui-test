import { render } from '@testing-library/react';
import { Vote } from './vote';

describe('Tests for <Vote />', () => {

  describe('should render and save the snapshot correctly', () => {
    it('default state', () => {
      const { asFragment } = render(<Vote />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('marked state', () => {
      const { asFragment } = render(
        <Vote thumbDown={true} />
      );
      expect(asFragment()).toMatchSnapshot();
    });

  });

});