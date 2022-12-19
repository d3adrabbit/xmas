import react, { useState } from 'react';
import soundOnIcon from './assets/soundOn.svg';
import soundOffIcon from './assets/soundOff.svg';

function Html() {
  const [sound, setSound] = useState(true);

  return (
    <>
      <img
        src={sound ? soundOnIcon : soundOffIcon}
        className="icon"
        onClick={() => {
          setSound(!sound);
        }}
      />
    </>
  );
}

export default Html;
