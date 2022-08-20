import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const TIME_KEY = "videoplayer-current-time"
const iframe = document.querySelector('iframe')


 const player = new Player(iframe);


const onPlay = function(data) {
    localStorage.setItem(TIME_KEY, JSON.stringify(data.seconds))
};

player.on('timeupdate', throttle(onPlay, 1000));
const settingsTime = JSON.parse(localStorage.getItem(TIME_KEY));

player.setCurrentTime(settingsTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
})
