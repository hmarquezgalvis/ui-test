import { render, screen } from '@testing-library/react';
import { VoteProgressBar } from "./vote-progress-bar"

describe('tests of <VoteProgressBar />', () => {

  it('should render and save the snapshot correctly', () => {
    const { asFragment } = render(
      <VoteProgressBar positive={70} negative={30} />
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/70.00%/i)).toBeInTheDocument();
    expect(screen.getByText(/30.00%/i)).toBeInTheDocument();
  });

});