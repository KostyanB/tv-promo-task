import { useState, useEffect } from 'react';
import { setPlayerStorage, getPlayerStorage } from '../helpers/handleStorage';

const useStartPlayTime = () => {
  const [startPlayTime, setStartPlayTime] = useState(0);

  const setPause = time => {
    setPlayerStorage(time);
    setStartPlayTime(time);
  };

  useEffect(() => {
    const pause = getPlayerStorage();
    pause && setStartPlayTime(pause);
  }, []);

  return { startPlayTime, setStartPlayTime, setPause };
};
export default useStartPlayTime;
