import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime !== null) {
  player.setCurrentTime(parseFloat(savedTime));
}

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  savePlaybackTime(seconds);
}

function savePlaybackTime(time) {
  localStorage.setItem('videoplayer-current-time', time);
}
