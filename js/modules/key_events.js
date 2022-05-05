// for the key events

export const keyEvents = () => {
  window.addEventListener('keydown', e => {
    if (e.key === '0') document.querySelector('[data-value="0"]').click();
    else if (e.key === '1') document.querySelector('[data-value="1"]').click();
    else if (e.key === '2') document.querySelector('[data-value="2"]').click();
    else if (e.key === '3') document.querySelector('[data-value="3"]').click();
    else if (e.key === '4') document.querySelector('[data-value="4"]').click();
    else if (e.key === '5') document.querySelector('[data-value="5"]').click();
    else if (e.key === '6') document.querySelector('[data-value="6"]').click();
    else if (e.key === '7') document.querySelector('[data-value="7"]').click();
    else if (e.key === '8') document.querySelector('[data-value="8"]').click();
    else if (e.key === '9') document.querySelector('[data-value="9"]').click();
    else if (e.key === '.') document.querySelector('[data-value="."]').click();
    else if (e.key === '+') document.querySelector('[data-value="+"]').click();
    else if (e.key === '-') document.querySelector('[data-value="-"]').click();
    else if (e.key === '*') document.querySelector('[data-value="*"]').click();
    else if (e.key === '/') document.querySelector('[data-value="/"]').click();
    else if (e.key === 'Backspace' && e.altKey === true) document.querySelector('[data-value="reset"]').click();
    else if (e.key === 'Backspace') document.querySelector('[data-value="del"]').click();
    else if (e.key === 'Enter') document.querySelector('[data-value="="]').click();
  });
};
