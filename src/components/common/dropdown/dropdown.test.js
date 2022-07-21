import { fireEvent, render, screen } from '@testing-library/react';
import { DropDown } from './dropdown';

describe('Tests for <Dropdown />', () => {

  describe('should render and save the snapshot correctly', () => {
    it('default state', () => {
      const { asFragment } = render(<DropDown value="Test 1" />);
      expect(asFragment()).toMatchSnapshot();
    });
    
    it('with some props', () => {
      const { asFragment } = render(<DropDown options={["Test 1"]} value="Test 1" />);
      expect(asFragment()).toMatchSnapshot();
    });

    it('options opened', () => {
      render(<DropDown options={["Test 1"]} value="Test 1" />);
      const button = screen.getByTestId('dropdown-value');
      
      fireEvent(
        button,
        new MouseEvent('click', { bubbles: true, cancelable: true }),
      );
      
      const list = screen.getByTestId('dropdown-list');
      expect(list).toBeDefined();
    });

  });

});