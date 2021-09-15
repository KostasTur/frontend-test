import React, { useRef } from 'react';

function Task5() {
  // refs
  const div = useRef(0);
  const h1 = useRef(0);
  const p = useRef(0);
  // custom func
  const light = () => {
    div.current.style.backgroundColor = '#f1f1f1';
    h1.current.style.color = '#000000';
    p.current.style.color = '#000000';
  };
  const dark = () => {
    div.current.style.backgroundColor = '#000000';
    h1.current.style.color = '#f1f1f1';
    p.current.style.color = '#f1f1f1';
  };
  return (
    <div ref={div}>
      <h1 ref={h1}>Theme Changer</h1>
      <p ref={p}>Click button to change theme</p>
      <button onClick={light}>Light theme</button>
      <button onClick={dark}>Dark theme</button>
    </div>
  );
}

export default Task5;

/* Task 5
Task 5 komponento viduje sukurkite h1 ir p žymas su tekstu ir du mygtukus.

Vienas mygtukas vadinsis "Light theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #f1f1f1, o tekstas #0000.
Kitas mygtukas vadinsis "Dark theme", kurį paspaudus Task7 komponento fonas
taps šios spalvos #000000, o tekstas #f1f1f1.

Pastabos:
- mygtukai turi būti atvaizduojami komponento viduje, jiems atskirų komponentų
kurti nereikia;
- panaudokite useRef.
*/
