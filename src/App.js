import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Footer from './components/Footer';

import './App.css';


// Sample project data (replace this with your actual project data)
const projectData = [
  {
    id: 1,
    title: 'Weather App',
    description: 'A weather application built using React.',
    image: 'path/to/weather-app-image.jpg', // Replace with your image path
  },
  {
    id: 2,
    title: 'Simon Game',
    description: 'A fun game that challenges your memory skills.',
    image: 'path/to/simon-game-image.jpg', // Replace with your image path
  },
  // Add more projects as needed
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Projects projects={projectData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
