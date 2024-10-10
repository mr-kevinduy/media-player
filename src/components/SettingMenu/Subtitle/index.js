import videojs from 'video.js';
import PanelMenuItem from '../../PanelMenu/PanelMenuItem';

class Subtitle extends PanelMenuItem {
  constructor(player, options) {
    console.log('Subtitle');
    super(player, {
      ...options,
      label: 'Subtitle',
      icon: 'vjs-icon-slow-motion-video',
      entries: [new TextTrack()]
    });

    this.addClass('vjs-setting-subtitle');
  }
}

videojs.registerComponent('Subtitle', Subtitle);

export default Subtitle;
