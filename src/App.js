import React from 'react';
import Navigation from './components/Navigation/navigation.js';
import Logo from './components/Logo/Logo.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm.js';
import Rank from './components/Rank/Rank.js';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  'particles': {
    'number': {
      'value': 100,
      'density': {
        'enable': true,
        'value_area': 500
      }
    }
  },
//   "interactivity": {
//     "events": {
//         "onhover": {
//             "enable": true,
//             "mode": "repulse"
//         }
//     }
// }
}


function App() {
  return (
    <div className="App">
      <Particles className= 'particles'
                params={particlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*
      
      <FaceRecognition />       */}
    </div>
  );
}

export default App;
