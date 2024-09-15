import React from 'react';
import './UmbrellaPreview.css';

function UmbrellaPreview({ umbrellaColor, logoSrc }) {
  return (
    <div className="preview-area">
      <div className="umbrella-preview">
        <img
          id="umbrellaImage"
          src={`images/umbrella-${umbrellaColor}.png`}
          alt="Umbrella"
        />
        {logoSrc && (
          <img
            id="logoPreview"
            src={logoSrc}
            alt="Logo Preview"
            className="logo-preview"
          />
        )}
      </div>
    </div>
  );
}

export default UmbrellaPreview;
