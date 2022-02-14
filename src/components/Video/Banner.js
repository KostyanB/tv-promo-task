import React, { useContext } from 'react';
import styled from 'styled-components';
import { VideoContext } from '../../context';
import { Link } from 'react-router-dom';

import env from '../../env.json';
import bannerBack from '../../img/banner.webp';

const {
  transitionDuration,
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
} = env;

const Wrapper = styled.div`
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

const Banner = () => {
  const {
    player: { player },
    startPlayTime: { setStartPlayTime },
    showBanner: { showBanner },
  } = useContext(VideoContext);

  const handleBanner = () => {
    const currentTime = player.getCurrentTime();
    setStartPlayTime(currentTime);
    player.pauseVideo();
  };

  return (
    <Wrapper show={showBanner}>
      <Button to="/promo" onClick={handleBanner}>
        OK
      </Button>
    </Wrapper>
  );
};
export default Banner;
