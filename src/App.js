import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { PowerHouse } from './Router/Router';

const App = () => {
  return (
    <RouterProvider router={PowerHouse} />
  );
};

export default App;