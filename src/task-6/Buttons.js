import React, { useContext } from 'react';
import { DataContext } from './Task6';

const Buttons = () => {
  const { handleClick } = useContext(DataContext);
  return (
    <div>
      <button onClick={() => handleClick(10)}>+10</button>
      <button onClick={() => handleClick(-10)}>-10</button>
    </div>
  );
};

export default Buttons;
