import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import env from '../../env.json';
import videoBack from '../../img/video.png';
import bannerBack from '../../img/banner.png';
import YouTube from 'react-youtube';
import Button from '../Styled/Buttons';

const { transitionDuration, bannerDelay } = env;

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

const Player = styled.div`
  grid-area: 1/-1;
  width: 100%;
  height: 100%;
`;
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
const BannerBtn = styled(Button)`
  width: 156px;
`;

const VideoBlock = () => {
  const [player, setPlayer] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [startTime, setStartTime] = useState();

  const opts = {
    width: '1280',
    height: '720',
    playerVars: {
      autoplay: 1,
    },
  };

  useEffect(() => {
    // if (player) {
    //   player.seekTo(startTime);
    //   player.playVideo();
    // }
    setTimeout(() => setShowBanner(true), bannerDelay);
  }, [player, startTime]);

  const handleReadyPlayer = e => {
    console.log('e.target: ', e.target);
    e.target.playVideo();
    setPlayer(e.target);
  };

  const handleBanner = () => {
    console.log('player: ', player);
    const currentTime = player.getCurrentTime();
    setStartTime(currentTime);
    player.pauseVideo();
  };

  return (
    <Container>
      {/* <Player> */}
      <YouTube videoId="M7FIvfx5J10" opts={opts} onReady={handleReadyPlayer} />
      {/* </Player> */}
      <Banner show={showBanner}>
        <BannerBtn onClick={handleBanner}>OK</BannerBtn>
      </Banner>
    </Container>
  );
};
export default VideoBlock;

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
