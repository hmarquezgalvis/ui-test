import { useState } from 'react';

export const RESULT_LAYOUT_LIST = 'List';
export const RESULT_LAYOUT_GRID = 'Grid';

export const useRoulingFilter = () => {
  const RESULT_LAYOUTS = [
    RESULT_LAYOUT_LIST,
    RESULT_LAYOUT_GRID,
  ];
  const defaultLayout = RESULT_LAYOUTS.at(0);
  const [layout, setLayout] = useState(defaultLayout);

  return {
    defaultLayout,
    layout,
    setLayout,
    RESULT_LAYOUTS,
  };
};