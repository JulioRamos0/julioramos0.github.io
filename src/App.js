import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faStackOverflow, faDev, faMediumM, faLinkedin, faHackerrank } from '@fortawesome/free-brands-svg-icons'
import { TypeAnimation } from 'react-type-animation';

import './App.css';

function App() {
  return (
    <main>
      <div class="intro">
        <TypeAnimation
          sequence={[
            'Hello, I\'m developer',
            1000,
            'Hello, I\'m Julio Ramos',
          ]}
          wrapper="span"
          cursor={false}
          speed={50}
        />
      </div>
      <div class="tagline">Full Stack Dev | Open-Source & Photography Enthusiast | Software Engineer</div>
      <div class="icons-social">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ramosisw"><FontAwesomeIcon icon={faGithub} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.hackerrank.com/profile/JulioRamos0"><FontAwesomeIcon icon={faHackerrank} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ramosisw"><FontAwesomeIcon icon={faTwitter} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/story/ramosisw"><FontAwesomeIcon icon={faStackOverflow} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ramosisw"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://dev.to/ramosisw"><FontAwesomeIcon icon={faDev} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@ramosisw"><FontAwesomeIcon icon={faMediumM} /></a>
      </div>
      <div align="center">
        {/* <img src="https://hits.dwyl.com/ramosisw/ramosiswgithubcom.svg"/> */}
      </div>
    </main>
  );
}

export default App;
