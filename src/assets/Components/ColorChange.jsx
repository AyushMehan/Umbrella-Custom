import React from 'react';

function ColorChange({ color, setColor }) {
  return (
    <button
      className="color-change"
      style={{ backgroundColor: color }}
      onClick={() => setColor(color)}
    ></button>
  );
}

export default ColorChange;
