// src/components/Preloader.js
import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-white opacity-75">
    {/* Customized preloader design */}
    <div className="loader ease-linear rounded-full border-t-3 border-t-purpul3 border-r-2 border-r-purpul3 border-b-2 border-b-purpul3 border-l-2 border-l-white h-12 w-12 animate-spin"></div>
  </div>
  );
};

export default Preloader;