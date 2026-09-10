import { h, render } from 'https://esm.sh/preact@10.25.4';
import htm from 'https://esm.sh/htm@3.1.1';
import { useEffect, useState } from 'https://esm.sh/preact@10.25.4/hooks';

// Initialize htm with Preact
const html = htm.bind(h);

const getCommonPrefix = (str1, str2) => {
  let i = 0;
  while (i < str1.length && i < str2.length && str1[i] === str2[i]) i++;
  return str1.substring(0, i);
};

const Typewriter = ({ texts, speed = 120, delay = 1000 }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const i = loopNum % texts.length;
    const fullText = texts[i];
    const nextText = texts[(loopNum + 1) % texts.length];
    const commonPrefix = getCommonPrefix(fullText, nextText);

    // Determinar la velocidad actual
    let currentSpeed = speed;
    if (isDeleting) currentSpeed /= 2;
    if (!isDeleting && text === fullText) currentSpeed = delay;
    if (isDeleting && text === commonPrefix) currentSpeed = 500;

    const timer = setTimeout(() => {
      if (!isDeleting && text === fullText) {
        if (loopNum === texts.length - 1) return; // Detenerse en la ultima frase
        setIsDeleting(true);
      } else if (isDeleting && text === commonPrefix) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      } else {
        setText(fullText.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, currentSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, texts, speed, delay]);

  return html`<span>${text}<span class="blinking-cursor">|</span></span>`;
};

const App = () => {
  return html`
    <main>
      <div class="intro">
        <${Typewriter} texts=${["Hello, I'm developer", "Hello, I'm Julio Ramos"]} />
      </div>
      <div class="tagline">Full Stack Dev | Open-Source & Photography Enthusiast | Software Engineer</div>
      <div class="icons-social">
        <a target="_blank" rel="noopener noreferrer" aria-label="GitHub" href="https://github.com/JulioRamos0"><i class="fa-brands fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" aria-label="HackerRank" href="https://www.hackerrank.com/profile/JulioRamos0"><i class="fa-brands fa-hackerrank"></i></a>
        <a target="_blank" rel="noopener noreferrer" aria-label="StackOverflow" href="https://stackoverflow.com/users/7343039/julioramos0"><i class="fa-brands fa-stack-overflow"></i></a>
        <a target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" href="https://www.linkedin.com/in/JulioRamos0"><i class="fa-brands fa-linkedin"></i></a>
        <a target="_blank" rel="noopener noreferrer" aria-label="Dev.to" href="https://dev.to/julioramos0"><i class="fa-brands fa-dev"></i></a>
        <a target="_blank" rel="noopener noreferrer" aria-label="Medium" href="https://medium.com/@julioramos0"><i class="fa-brands fa-medium"></i></a>
      </div>
    </main>
  `;
};

render(html`<${App} />`, document.getElementById('root'));
