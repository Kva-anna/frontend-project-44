#!/usr/bin/env node

import { isEven, generationNumber } from '../src/index.js';
import runGame from '../src/runGame.js';

const generateEvenQuestion = () => {
  const num = generationNumber();
  const correctAnswer = String(isEven(num) ? 'yes' : 'no');

  const question = `${num}`;

  return [question, correctAnswer]
};

const description = `Answer "yes" if the number is even, otherwise answer "no".`;
runGame(description, generateEvenQuestion);