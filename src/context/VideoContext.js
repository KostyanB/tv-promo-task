import React, { createContext } from 'react';
import useStartPlayTime from '../hooks/useStartPlayTime';
import usePlayer from '../hooks/usePlayer';
import useShowBanner from '../hooks/useShowBanner';

export const VideoContext = createContext();

export const VideoContextProvider = props => {
  const player = usePlayer();
  const startPlayTime = useStartPlayTime();
  const showBanner = useShowBanner();

  return (
    <VideoContext.Provider value={{ player, startPlayTime, showBanner }}>
      {props.children}
    </VideoContext.Provider>
  );
};
