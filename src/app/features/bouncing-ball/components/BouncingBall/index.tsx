import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5';
import { BounceBall } from '../../model/Ball';

const BouncingBall: React.FC = () => {
  let ball;

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(window.innerWidth, window.innerHeight).parent(
      canvasParentRef,
    );
    p5.background(255);
    ball = new BounceBall(p5, window.innerWidth / 2, window.innerHeight / 2);
  };

  const draw = (p5: p5Types) => {
    ball.move();
    ball.bounce();
    ball.display(p5);
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default BouncingBall;
