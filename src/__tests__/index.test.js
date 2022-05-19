import { render, screen } from '@testing-library/react';
import { CardList } from '../components/card-list/card-list';
import { RoulingContainer } from '../components/containers/rouling-container';

import { Provider } from 'react-redux';
import store from '../store/store';

describe('tests of Main', () => {
  
  it('should render and save the snapshot correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <RoulingContainer><CardList /></RoulingContainer>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByText(/Previous Rulings/i)).toBeInTheDocument();
  });

});