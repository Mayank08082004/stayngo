// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import PropertyDetails from './pages/PropertyDetails';

function App() {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <SearchBar />
        <PropertyDetails /> 
         {/* For testing, we display PropertyDetails directly */}
      </main>
    </div>
  );
}

export default App;
