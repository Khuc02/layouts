import React, { useState } from 'react';
import Layout1200x600 from './pages/Layout1200x600';
import GloriusSeries from './pages/GloriusSeries';
import InfinityMegaLayout from './pages/InfinityMegaLayout';
import MattCollection from './pages/MattCollection';
import HorizontalLayout from './pages/HorizontalLayout';
import VerticalLayout from './pages/VerticalLayout';

const components = [
  'Layout1200x600',
  'GloriusSeries',
  'InfinityMegaLayout',
  'MattCollection',
  'HorizontalLayout',
  'VerticalLayout'
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0); 

  const handleComponentChange = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const currentComponent = components[currentIndex];

  return (
    <div className="relative h-screen">
      <div className="flex justify-center">
        {currentComponent === 'Layout1200x600' && <Layout1200x600 />}
        {currentComponent === 'GloriusSeries' && <GloriusSeries />}
        {currentComponent === 'InfinityMegaLayout' && <InfinityMegaLayout />}
        {currentComponent === 'MattCollection' && <MattCollection />}
        {currentComponent === 'HorizontalLayout' && <HorizontalLayout />}
        {currentComponent === 'VerticalLayout' && <VerticalLayout />}
      </div>

      <div className="absolute top-4 right-4 space-x-4">
        <button 
          onClick={handleComponentChange}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Change Component
        </button>
      </div>
    </div>
  );
}

export default App;
