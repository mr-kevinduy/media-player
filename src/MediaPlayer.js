import videojs from 'video.js';
import 'video.js/dist/video-js.css';

const { IS_IPHONE, IOS_VERSION } = videojs.browser;

videojs.hook('setup', _player => {
  _player.playsinline(_player.options_.playsinline !== false);

  _player.addClass('video-js');

  if (IS_IPHONE) {
    _player.addClass('vjs-is-iphone');
    if (IOS_VERSION < 11) {
      _player.addClass('vjs-iphone-below-11');
    }
  }
});
