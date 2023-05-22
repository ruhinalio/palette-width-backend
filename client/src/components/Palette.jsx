import React, { useState } from 'react';
import { send } from '../socketApi';

const Palette = () => {
  const [color, setColor] = useState('#000000');

  return (
    <div className='palette'>
      <input
        type='color'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={() => send(color)}>click!</button>

      <h1 style={{ color: '#fff' }}>{color}</h1>
    </div>
  );
};

export default Palette;
