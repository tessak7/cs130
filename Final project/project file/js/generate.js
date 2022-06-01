
const playSleepy = (ev) => {
  document.querySelector('#playlist-demo').src = "https://open.spotify.com/embed/playlist/35xI4hSJ8MdO1xkXwsd56a";
  document.querySelector('p').innerHTML = 'Play this playlist when you want some music to dream to';
};

const playStudy = (ev) => {
  document.querySelector('#playlist-demo').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX9sIqqvKsjG8";
  document.querySelector('p').innerHTML = 'Play this playlist when you need to ace your exam';
};

const playParty = (ev) => {
  document.querySelector('#playlist-demo').src = 'https://open.spotify.com/embed/playlist/37i9dQZF1DXa2PvUpywmrr';
  document.querySelector('p').innerHTML = "Play this playlist when you're out on the town";
};

const playWorkout = (ev) => {
  document.querySelector('#playlist-demo').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWUSyphfcc6aL";
  document.querySelector('p').innerHTML = 'Play this playlist for that extra push during your workout';
};

const playSad = (ev) => {
  document.querySelector('#playlist-demo').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DWSqBruwoIXkA";
  document.querySelector('p').innerHTML = 'Play this playlist when you just want to feel the feels for a moment';
};

const playMoodBooster = (ev) => {
  document.querySelector('#playlist-demo').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DX3rxVfibe1L0";
  document.querySelector('p').innerHTML = 'Play this playlist when need a pick me up on a hard day';
};

const playDate = (ev) => {
  document.querySelector('#playlist-demo').src = "https://open.spotify.com/embed/playlist/37i9dQZF1DXalDDvuKwGpK";
  document.querySelector('p').innerHTML = "Play this playlist when you've found the one <3";
};

const playShower = (ev) => {
  document.querySelector('#playlist-demo').src = "https://open.spotify.com/embed/playlist/37i9dQZF1EIfczicEIIA31";
  document.querySelector('p').innerHTML = "Play this playlist when you're belting in the shower";
};


document.querySelector('#btn1').onclick = playSleepy;
document.querySelector('#btn2').onclick = playStudy;
document.querySelector('#btn3').onclick = playParty;
document.querySelector('#btn4').onclick = playWorkout;
document.querySelector('#btn5').onclick = playSad;
document.querySelector('#btn6').onclick = playMoodBooster;
document.querySelector('#btn7').onclick = playDate;
document.querySelector('#btn8').onclick = playShower;



