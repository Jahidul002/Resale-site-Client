import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { PowerHouse } from './Router/Router';

const App = () => {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={PowerHouse} />
      <Toaster />
    </div>
  );
};

export default App;