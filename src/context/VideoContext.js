import React, { createContext } from 'react';
import usePlayer from '../hooks/usePlayer';
import useShowBanner from '../hooks/useShowBanner';

export const VideoContext = createContext();

export const VideoContextProvider = props => {
  const player = usePlayer();
  const showBanner = useShowBanner();

  return (
    <VideoContext.Provider value={{ player, showBanner }}>
      {props.children}
    </VideoContext.Provider>
  );
};
