#!/usr/bin/env node

import runGame from '../src/runGame.js';
import { generationMathOperator, calcNums, generationNumber } from '../src/index.js';

const generateCalcQuestion = () => {
  const a = generationNumber();
  const b = generationNumber();
  const operator = generationMathOperator();

  const question = `${a} ${operator} ${b}`;
  const correctAnswer = String(calcNums(a, b, operator));

  return [question, correctAnswer];
};

const description = 'What is the result of the expression?';
runGame(description, generateCalcQuestion);