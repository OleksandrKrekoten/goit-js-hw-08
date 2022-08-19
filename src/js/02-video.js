import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const TIME_KEY = "videoplayer-current-time"
const iframe = document.querySelector('iframe')


 const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const onPlay = function(data) {
    // data is an object containing properties specific to that event
    localStorage.setItem(TIME_KEY, JSON.stringify(data))
};

player.on('timeupdate', throttle(onPlay, 1000));
const settingsTime = JSON.parse(localStorage.getItem(TIME_KEY));
console.log(settingsTime);
player.setCurrentTime(settingsTime.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
