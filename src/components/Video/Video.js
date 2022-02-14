import React from 'react';
import styled from 'styled-components';
import { VideoContextProvider } from '../../context';
import videoBack from '../../img/video.webp';
import Player from './Player';
import Banner from './Banner';

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${videoBack});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const Video = () => (
  <VideoContextProvider>
    <Container>
      <Player />
      <Banner />
    </Container>
  </VideoContextProvider>
);
export default Video;
