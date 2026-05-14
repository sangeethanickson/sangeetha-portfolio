import { useEffect, useState } from 'react';

// Looping typewriter effect across an array of phrases.
export default function useTypewriter(words, { typeSpeed = 70, deleteSpeed = 35, pause = 1400 } = {}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [phase, setPhase] = useState('typing'); // typing | pausing | deleting

  useEffect(() => {
    if (!words || words.length === 0) return;
    const current = words[index % words.length];

    let timer;
    if (phase === 'typing') {
      if (text.length < current.length) {
        timer = setTimeout(() => setText(current.slice(0, text.length + 1)), typeSpeed);
      } else {
        timer = setTimeout(() => setPhase('deleting'), pause);
      }
    } else if (phase === 'deleting') {
      if (text.length > 0) {
        timer = setTimeout(() => setText(current.slice(0, text.length - 1)), deleteSpeed);
      } else {
        setIndex((i) => (i + 1) % words.length);
        setPhase('typing');
      }
    }

    return () => clearTimeout(timer);
  }, [text, phase, index, words, typeSpeed, deleteSpeed, pause]);

  return text;
}
