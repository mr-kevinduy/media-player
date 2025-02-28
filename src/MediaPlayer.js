import videojs from 'video.js';

import './components/ControlBar';
import './components/PanelMenu/PanelMenuButton';

import 'video.js/dist/video-js.css';

const { IS_IPHONE, IOS_VERSION } = videojs.browser;

videojs.getComponent('ControlBar').prototype.options_.children = [
  'PlayToggle',
  'CustomControlSpacer',
  'VolumePanel',
  'CurrentTimeDisplay',
  'TimeDivider',
  'DurationDisplay',
  'ProgressControl',
  'RemainingTimeDisplay',
  'CustomControlSpacer',
  'PlaybackRateMenuButton',
  'ChaptersButton',
  'DescriptionsButton',
  // 'SubsCapsButton',
  // 'AudioTrackButton',
  // 'SettingMenuButton',
  'PanelMenuButton',
  'PictureInPictureToggle',
  'FullscreenToggle'
];

videojs.log.history.enable();

videojs.hook('setup', _player => {
  _player.playsinline(_player.options_.playsinline !== false);
  // debugger;
  _player.addClass('video-js');

  if (IS_IPHONE) {
    _player.addClass('vjs-is-iphone');
    if (IOS_VERSION < 11) {
      _player.addClass('vjs-iphone-below-11');
    }
  }

  _player.on('mouseleave', function () {
    _player.userActive(false);
  });

  _player.ready(function () {
    _player.controls(_player.options_.controls !== false);
  });
});

