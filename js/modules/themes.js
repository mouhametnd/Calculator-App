export const setPreferTheme = () => {
  const theme1 = {
    id: 1,
    mainBg: 'hsl(222, 26%, 31%)',
    toggleAndKeyboardBg: 'hsl(223, 31%, 20%)',
    screen: 'hsl(224, 36%, 15%)',
    keyBg: 'rgb(234, 227, 220)',
    keyShadow: 'hsl(28, 16%, 65%)',
    keyTextClr: 'hsl(221, 14%, 31%)',
    resetAndDelBg: 'hsl(225, 21%, 49%)',
    resetAndDelShadow: 'hsl(224, 28%, 35%)',
    resetAndDelTextClr: 'hsl(0, 0%, 100%)',
    equalBg: 'hsl(6, 63%, 50%)',
    equalShadow: 'hsl(6, 70%, 34%)',
    equalTextClr: 'hsl(0, 0%, 100%)',
    topTextClr: 'hsl(0, 0%, 100%)',
  };
  const theme2 = {
    id: 2,
    mainBg: 'hsl(0, 0%, 90%)',
    toggleAndKeyboardBg: 'hsl(0, 5%, 81%)',
    screen: 'hsl(0, 5%, 93%)',
    keyBg: 'rgb(239, 239, 239)',
    keyShadow: 'hsl(35, 11%, 61%)',
    keyTextClr: 'hsl(60, 10%, 19%)',
    equalBg: 'hsl(6, 63%, 50%)',
    equalShadow: 'hsl(25, 99%, 27%)',
    equalTextClr: 'hsl(0, 5%, 93%)',
    resetAndDelBg: 'rgb(55, 127, 134)',
    resetAndDelShadow: 'hsl(185, 58%, 25%)',
    resetAndDelTextClr: 'hsl(0, 5%, 93%)',
    secondaryTextClr: 'hsl(0, 0%, 100%)',
    topTextClr: 'hsl(60, 10%, 19%)',
  };
  const theme3 = {
    id: 3,
    mainBg: 'rgb(22, 6, 40)',
    toggleAndKeyboardBg: 'rgb(29, 9, 52)',
    screen: 'rgb(29, 9, 52)',
    keyBg: 'rgb(52, 28, 79)',
    keyShadow: 'rgb(135, 28, 156) ',
    keyTextClr: 'hsl(52, 100%, 62%)',
    equalBg: 'rgb(108, 249, 242)',
    equalShadow: 'rgb(108, 249, 242)',
    equalTextClr: 'hsl(52, 100%, 62%)',
    resetAndDelBg: 'rgb(88, 7, 125)',
    resetAndDelShadow: 'rgb(188, 21, 244)',
    resetAndDelTextClr: 'hsl(0, 0%, 100%)',
    topTextClr: 'hsl(52, 100%, 62%)',
  };
  const drawTheme = preferTheme => {
    const root = document.querySelector(':root');
    root.style.setProperty('--mainBg', preferTheme.mainBg);
    root.style.setProperty('--toggleAndKeyboardBg', preferTheme.toggleAndKeyboardBg);
    root.style.setProperty('--screen', preferTheme.screen);

    root.style.setProperty('--keyBg', preferTheme.keyBg);
    root.style.setProperty('--keyShadow', preferTheme.keyShadow);
    root.style.setProperty('--keyTextClr', preferTheme.keyTextClr);

    root.style.setProperty('--equalBg', preferTheme.equalBg);
    root.style.setProperty('--equalShadow', preferTheme.equalShadow);
    root.style.setProperty('--equalTextClr', preferTheme.equalTextClr);

    root.style.setProperty('--resetAndDelBg', preferTheme.resetAndDelBg);
    root.style.setProperty('--resetAndDelShadow', preferTheme.resetAndDelShadow);
    root.style.setProperty('--resetAndDelTextClr', preferTheme.resetAndDelTextClr);
    root.style.setProperty('--topTextClr', preferTheme.topTextClr);
    
    // we change the value of the input if the theme has been changed
    $input.value = preferTheme.id;
    document.querySelector('.container').dataset.themeActive = preferTheme.id;
  };
  const $input = document.getElementById('input');
  const $contThemes = document.querySelector('.sect--1__cont-themes');

  // this function set the theme that we passed as an argument
  const setTheme = preferTheme => {
    localStorage.setItem('preferTheme', JSON.stringify(preferTheme));
    drawTheme(preferTheme);
  };

  // this function checks the theme from localStorage and if is undefined we'll set the theme1
  const getTheme = () => (localStorage.getItem('preferTheme') ? JSON.parse(localStorage.getItem('preferTheme')) : false);

  // here drawing the theme from localStorage if we have.
  drawTheme(getTheme() || theme1);

// events for the span elements
  $contThemes.addEventListener('click', e => {
    if (e.target.matches('#theme-1')) setTheme(theme1);
    else if (e.target.matches('#theme-2')) setTheme(theme2);
    else if (e.target.matches('#theme-3')) setTheme(theme3);
  });

  // event for the input range
  $input.addEventListener('input', e => {
    if (+$input.value === 1) setTheme(theme1);
    else if (+$input.value === 2) setTheme(theme2)
    else if (+$input.value === 3) setTheme(theme3);
  });
};
