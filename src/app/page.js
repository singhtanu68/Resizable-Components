import React from 'react';
import Resizable from '../components/Resizable';

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Resizable Components</h1>
      <Resizable />
    </div>
  );
};

export default App;