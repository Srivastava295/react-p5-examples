import React from 'react';
import { Helmet } from 'react-helmet-async';
// import RandomWalkerPage from '../../features/random-walker/containers/RandomWalkerPage';
import BouncingBallPage from '../../features/bouncing-ball/containers/BouncingBallPage';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>React p5</title>
        <meta name="description" content="React p5" />
      </Helmet>
      <BouncingBallPage />
    </>
  );
}
