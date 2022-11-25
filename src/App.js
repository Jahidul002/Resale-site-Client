import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { PowerHouse } from './Router/Router';

const App = () => {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={PowerHouse} />
    </div>
  );
};

export default App;