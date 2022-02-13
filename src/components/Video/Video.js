import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context';
import { Link } from 'react-router-dom';

import env from '../../env.json';
import videoBack from '../../img/video.webp';
import bannerBack from '../../img/banner.webp';
import YouTube from 'react-youtube';

const {
  transitionDuration,
  bannerDelay,
  colors: {
    mainBtnColors: {
      mainBtnBack,
      mainBtnBorder,
      mainBtnText,
      mainBtnHoverBack,
      mainBtnHoverBorder,
      mainBtnHoverText,
      mainBtnActiveText,
    },
  },
  backend: { videoId },
} = env;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${videoBack});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;
const Banner = styled.div`
  width: 251px;
  height: 357px;
  position: absolute;
  right: 0px;
  top: 220px;
  transform: ${props => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform ${transitionDuration};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10px 10px;
  background-image: url(${bannerBack});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 5;
`;
const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 156px;
  height: 52px;
  background-color: ${mainBtnBack};
  border: 2px solid ${mainBtnBorder};
  font-weight: 500;
  color: ${mainBtnText};
  grid-area: ${props => (props.area ? props.area : '')};
  &:focus,
  &:hover,
  &:active {
    background-color: ${mainBtnHoverBack};
    border: 1px solid ${mainBtnHoverBorder};
  }
  &:focus,
  &:hover {
    color: ${mainBtnHoverText};
  }
  &:active {
    color: ${mainBtnActiveText};
  }
`;

const Video = () => {
  const [player, setPlayer] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const {
    startPlayTime: { startPlayTime, setStartPlayTime },
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

    setTimeout(() => setShowBanner(true), bannerDelay);
  }, [player, startPlayTime]);

  const handleReadyPlayer = e => setPlayer(e.target);

  const handleBanner = () => {
    const currentTime = player.getCurrentTime();
    setStartPlayTime(currentTime);
    player.pauseVideo();
  };

  return (
    <Container>
      <YouTube videoId={videoId} opts={opts} onReady={handleReadyPlayer} />
      <Banner show={showBanner}>
        <Button to="/promo" onClick={handleBanner}>
          OK
        </Button>
      </Banner>
    </Container>
  );
};
export default Video;
