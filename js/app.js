'use strict';
import { keyEvents } from './modules/key_events.js';
import { setPreferTheme } from './modules/themes.js';
window.addEventListener('DOMContentLoaded', () => {
  setPreferTheme();
  keyEvents()
  const $content = document.querySelector('.sect--2__result');
  const $spanOperation = document.querySelector('.sect--2__operation');
  const $contBtns = document.querySelector('.sect--3');
  let hasFirstValue = false;
  let hasSecondValue = false;
  let hasOperator = false;
  let isOperationDone = false;

  // funtion to reset the value of the calc
  const reset = () => {
    isOperationDone = false;
    hasFirstValue = false;
    hasSecondValue = false;
    hasOperator = false;
    $spanOperation.textContent = '';
    $content.textContent = '0';
  };
// function to delete the las number
  const del = () => {
    if (isOperationDone) {
      let num = +$content.textContent;
      reset();
      takefirstValue(num);
    } else {
      $content.textContent = $content.textContent.slice(0, $content.textContent.length - 1);
      if ($content.textContent.length === 0) $content.textContent = '0';
    }
  };

  // this function draws the result of the operation
  const drawResult = (type, result, value1, value2 ) => {
    if ($content.textContent.includes('∞')) return reset();
    else {
      $content.textContent = result;
      type === '-' ? ($spanOperation.textContent = `${value1} ${type} ${value2}`) : ($spanOperation.textContent = `${value2} ${type} ${value1}`);
    }
  };

  // this function does the operation of the calc
  const doOperation = () => {
    const operation = $spanOperation.textContent.split(' ');
    let operator = operation[1];
    let value = operation.length === 2 ? +operation[0] : +operation[2];
    if (operator === '+') drawResult('+', value + +$content.textContent, value, $content.textContent);
    else if (operator === '-') drawResult('-', value - +$content.textContent, value, $content.textContent);
    else if (operator === '/') drawResult('/', $content.textContent === '0' ? '∞' : value / +$content.textContent, value, $content.textContent);
    else if (operator === '*') drawResult('*', value * +$content.textContent, value, $content.textContent);
    hasOperator = false;
    hasSecondValue = false;
    hasFirstValue = false;
    isOperationDone = true;
  };

  // this function handles the first value of the calc
  const takefirstValue = value => {
    if (value === '.') $content.textContent += '.';
    else if ($content.textContent === '0' && value === '-') $content.textContent = '-';
    else if (!isNaN(value)) {
      $content.textContent === '0' ? ($content.textContent = value) : ($content.textContent += value);
      hasFirstValue = true;
    } else if (hasFirstValue && value !== '=') {
      hasOperator = true;
      $spanOperation.textContent = $content.textContent + ` ${value}`;
    }
  };

  // this function handles the second value of the calc and depending on if an operation has been done, we handle the second value differently
  const takeSecondValue = value => {
    if (isOperationDone) {
      if ((value === '.' || !isNaN(value)) && !hasOperator) reset(), takefirstValue(value);
      else if (value === '=') (hasSecondValue = false), doOperation(value);
      else if (!hasSecondValue && isNaN(value) && value !== '.') (hasOperator = true), ($spanOperation.textContent = $content.textContent + ` ${value}`);
      else if (hasOperator && (!isNaN(value) || value === '.')) hasSecondValue ? ($content.textContent += value) : (($content.textContent = value), (hasSecondValue = true));
      else if (hasSecondValue && isNaN(value)) doOperation();
    } else if (value === '=') doOperation();
    else if (!isNaN(value) || value === '.') hasSecondValue ? ($content.textContent += value) : (($content.textContent = value), (hasSecondValue = true));
    else if (isNaN(value) || hasSecondValue) doOperation(value);
  };

  // click events for the keys
  $contBtns.addEventListener('click', e => {
    if (e.target !== $contBtns) {
      if ((hasOperator || isOperationDone) && e.target.dataset.value !== 'del' && e.target.dataset.value !== 'reset') takeSecondValue(e.target.dataset.value);
      else if (!hasOperator && e.target.dataset.value !== 'del' && e.target.dataset.value !== 'reset') takefirstValue(e.target.dataset.value);
      else if (e.target.dataset.value === 'reset') reset();
      else if (e.target.dataset.value === 'del' && !hasOperator) del();
    }
  });
});
