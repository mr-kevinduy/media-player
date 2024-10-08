import videojs from 'video.js';
import './MediaPlayer.js';
import './components/ControlBar';
import './components/SettingMenu/SettingMenuButton';

export function MediaPlayer(element, options) {
  options = Object.assign({}, {
    autoplay: true,
    controls: true
  }, options) || {};

  console.log(options);

  var src = 'src' in options ? options.src : '';
  var player = videojs(element, options);
  player.loadMedia({
    artist: 'Disney',
    album: 'Oceans',
    title: 'Demo Video',
    description: 'Hello, this is description',
    poster: '//vjs.zencdn.net/v/oceans.png',
    src: src
  });

  return player;
}

