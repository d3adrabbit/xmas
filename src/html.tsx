import react, { useRef, useState } from 'react';
import soundOnIcon from './assets/soundOn.svg';
import soundOffIcon from './assets/soundOff.svg';

function Html() {
  const [sound, setSound] = useState(false);

  const musicRef = useRef<HTMLAudioElement>(null);

  const handleClick = () => {
    if (sound) {
      musicRef.current?.pause();
    } else {
      musicRef.current?.play();
    }
    setSound(!sound);
  };

  return (
    <>
      <img
        src={sound ? soundOnIcon : soundOffIcon}
        className="icon sound"
        onClick={handleClick}
      />
      <audio
        loop
        src="/we-wish-you-a-merry-christmas-125995.mp3"
        ref={musicRef}
      />

      <div className="content">
        <div className="title">merry christmas</div>

        <div className="other">
          Music by
          <a href="https://pixabay.com/users/grand_project-19033897/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=126685">
            Grand_Project
          </a>
          from
          <a href="https://pixabay.com/music//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=music&amp;utm_content=126685">
            Pixabay
          </a>
        </div>
        <div className="other">
          Inspired by the work of
          <a href="https://dribbble.com/shots/20149802-Happy-Holidays-3D-animation">
            Aleksander Buksza
          </a>
        </div>

        <div className="other">
          Made with <span>💗</span> by DeadRabbit
        </div>
      </div>
    </>
  );
}

export default Html;
