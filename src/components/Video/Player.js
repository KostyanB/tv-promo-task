import React, { useEffect, useContext } from 'react';
import { VideoContext, Context } from '../../context';
import env from '../../env.json';
import YouTube from 'react-youtube';

const {
  bannerDelay,
  backend: { videoId },
} = env;

const Player = () => {
  const {
    player: { player, setPlayer },
    showBanner: { setShowBanner },
  } = useContext(VideoContext);
  const {
    startPlayTime: { startPlayTime },
  } = useContext(Context);

  const opts = {
    width: '1280',
    height: '720',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    if (player) {
      player.seekTo(startPlayTime);
      player.playVideo();
    }
  }, [player, startPlayTime]);

  const handleReadyPlayer = e => {
    setPlayer(e.target);
    setTimeout(() => setShowBanner(true), bannerDelay);
  };

  return <YouTube videoId={videoId} opts={opts} onReady={handleReadyPlayer} />;
};
export default Player;
