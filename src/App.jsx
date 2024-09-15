import React, { useState } from 'react';
import UmbrellaPreview from './assets/Components/UmbrellaPreview';
import ColorChange from './assets/Components/ColorChange';
import LogoUploader from './assets/Components/LogoUploader';
import Loader from './assets/Components/Loader';
import './App.css';

function App() {
  const [umbrellaColor, setUmbrellaColor] = useState('blue');
  const [logoSrc, setLogoSrc] = useState('');
  const [loading, setLoading] = useState(false);

  const colorsWithAlpha = {
    blue: '#007BFF20',
    pink: '#FFC0CB20',
    yellow: '#FFFF0020',
  };

  const handleColorChange = (color) => {
    setLoading(true);
    setTimeout(() => {
      setUmbrellaColor(color);
      setLoading(false);
    }, 1000); // Simulating loading time
  };


  const backgroundColor = colorsWithAlpha[umbrellaColor];
  return (
    <div className="customizer-container w-full h-screen" style={{ backgroundColor }}>
      <div className="customizer-layout w-full h-full flex">
        <div className='flex items-center w-1/2'>
          {loading ? (
            <Loader />
          ) : (
            <UmbrellaPreview umbrellaColor={umbrellaColor} logoSrc={logoSrc} />
          )}
        </div>

        <div className="options w-1/2 flex flex-col justify-center items-start gap-[2.6vw]">

          <div>
            <h1 className='text-5xl font-semibold tracking-tighter'>Custom Umbrella</h1>
          </div>

          {/* Color Swatches */}
          <div className="color-options">
            <ColorChange color="blue" setColor={handleColorChange} />
            <ColorChange color="pink" setColor={handleColorChange} />
            <ColorChange color="yellow" setColor={handleColorChange} />
          </div>

          {/* Logo Uploader */}
          <div className='flex flex-col items-start gap-6'>

            <div className='flex flex-col gap-2'>
              <div className='flex flex-col items-start'>
                <h1 className='text-xl font-semibold tracking-wider'>Customize your umbrella</h1>

                <div className='flex flex-col items-start font-light'>
                  <p>Upload a logo for an instant preview.</p>
                  <p>.png and .jpg files only. Max file size is 5MB.</p>
                </div>
              </div>

              <div>
                <LogoUploader setLogoSrc={setLogoSrc} backgroundColor={backgroundColor} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
