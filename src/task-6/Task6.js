import React, { useState, createContext } from 'react';
import CompA from './CompA';
import CompB from './CompB';

export const DataContext = createContext();

function Task6() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const handleClick = (number) => {
    if (count < 100) {
      setCount(count + number);
    } else if (count === 99) {
      setMessage('Didinti nebegalima');
    }
    // else {
    //   setCount(count + number);
    // }
  };
  return (
    <>
      <h3>Task 6</h3>
      <h2>{count}</h2>
      {message && <p>{message}</p>}
      <DataContext.Provider value={{ handleClick }}>
        <CompA />
        <CompB />
      </DataContext.Provider>
    </>
  );
}

export default Task6;

/* Task 6
task-6 aplanke rasite kelis komponetus. Task6 komponente, turi būti atvaizduojami
šie kompoentai: CompA (viduje turi <h2>CompA</h2> ir CompA1 (su tekstu <h3>CompA1</h3>)) 
ir CompB (viduje turi <h2>CompB</h2>).

Task8 komponentų medis
- CompA
-- CompA1
- CompB

Task8 viduje bus sukurtas Counter state'as, kuri bus galima valdyti iš CompA1 ir CompB
State'as bus valdomas su mygtkais, kurie leis state'ą padidinti 10 taškų arba pamažinti 10.
State'ui pasiekus 100, bus draudžiama didinti state'ą ir pasirodys pranešimas "Didinti nebegalima"

Pastaba: naudokite useState, useContext (Context API).

*/
