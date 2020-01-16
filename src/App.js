import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter, faStackOverflow, faDev, faMedium, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Typing from 'react-typing-animation';

import './App.css';

function App() {
  return (
    <main>
      <div class="intro">
        <Typing speed={80}>
          Hello, I'm
          <Typing.Speed ms={200} />
          <span> </span>
          Developer
          <Typing.Speed ms={50} />
          <Typing.Backspace count={9} />
          <Typing.Delay ms={500} />
          <Typing.Speed ms={100} />
          Julio Ramos
        </Typing>
      </div>
      <div class="tagline">Full Stack Dev | Open-Source & Photography Enthusiast | Software Engineer</div>
      <div class="icons-social">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/ramosisw"><FontAwesomeIcon icon={faGithub} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ramosisw"><FontAwesomeIcon icon={faTwitter} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://stackoverflow.com/story/ramosisw"><FontAwesomeIcon icon={faStackOverflow} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ramosisw"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://dev.to/ramosisw"><FontAwesomeIcon icon={faDev} /></a>
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@ramosisw"><FontAwesomeIcon icon={faMedium} /></a>
      </div>
      <div align="center">
        <img src="http://hits.dwyl.io/ramosiswgithubcom.svg"/>
      </div>
    </main>
  );
}

export default App;
