import React from 'react';
import { Helmet } from 'react-helmet-async';
import RandomWalkerPage from '../../features/random-walker/containers/RandomWalkerPage';

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>React p5</title>
        <meta name="description" content="React p5" />
      </Helmet>
      <RandomWalkerPage />
    </>
  );
}
