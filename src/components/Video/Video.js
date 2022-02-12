import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../../context';
import { Link } from 'react-router-dom';

import env from '../../env.json';
import videoBack from '../../img/video.webp';
import bannerBack from '../../img/banner.webp';
import YouTube from 'react-youtube';
// import Button from '../Styled/Buttons';

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
  /* display: grid; */
  background-image: url(${videoBack});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;
// const Player = styled.div`
//   grid-area: 1/-1;
//   width: 100%;
//   height: 100%;
// `;
const Banner = styled.div`
  width: 251px;
  height: 357px;
  /* grid-area: 1/-1;
  place-self: end end;
  margin-bottom: 143px; */
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
// const BannerBtn = styled(Button)`
//   width: 156px;
// `;

const Btn = styled(Link)`
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

  const handleReadyPlayer = e => {
    // console.log('e.target: ', e.target);
    // e.target.playVideo();
    setPlayer(e.target);
  };

  const handleBanner = () => {
    // console.log('player: ', player);
    const currentTime = player.getCurrentTime();
    setStartPlayTime(currentTime);
    player.pauseVideo();
  };

  return (
    <Container>
      {/* <Player> */}
      <YouTube videoId={videoId} opts={opts} onReady={handleReadyPlayer} />
      {/* </Player> */}
      <Banner show={showBanner}>
        {/* <BannerBtn onClick={handleBanner}>OK</BannerBtn> */}
        <Btn to="/promo" onClick={handleBanner}>
          OK
        </Btn>
      </Banner>
    </Container>
  );
};
export default Video;

/* <iframe
  width="100%"
  height="100%"
  type="text/html"
  src="https://www.youtube.com/embed/M7FIvfx5J10?rel=0&autoplay=1&loop=1&version=3&html5=1&hd=1"
  title="Мечта Вашего ребенка"
  frameBorder="0"
  allowFullScreen
  allow="autoplay; encrypted-media"
/>; */
