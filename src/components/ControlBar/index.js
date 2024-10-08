import videojs from 'video.js';
// import './ControlBar.Mobile';

// import './Progress/Progress';
import './ControlBar.scss';

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
  'SubsCapsButton',
  'AudioTrackButton',
  'SettingMenuButton',
  'PictureInPictureToggle',
  'FullscreenToggle'
];

videojs.hook('setup', _player => {
  _player.on('mouseleave', function () {
    _player.userActive(false);
  });

  _player.ready(function () {
    _player.controls(_player.options_.controls !== false);
  });
});
