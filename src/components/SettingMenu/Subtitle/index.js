import videojs from 'video.js';
import PanelMenuItem from '../../PanelMenu/PanelMenuItem';
// import SubtitleMenuItem from './SubtitleMenuItem';

class Subtitle extends PanelMenuItem {
  constructor(player, options) {
    console.log('Subtitle');
    super(player, {
      ...options,
      label: 'Subtitle',
      icon: 'vjs-icon-slow-motion-video',
      entries: []
    });

    player.Subtitle = this;

    this.addClass('vjs-setting-subtitle');
  }

  handleClick() {
    console.log('Subtitle click');
    this.setEntries(this.updateEntries());
    super.handleClick();
  }

  updateEntries() {
    var entries = [];
    var tracks = this.player_.textTracks();
    console.log('tracks: ', tracks);
    console.log('remoteTracks: ', tracks.length);
    for (var i = 0; i < tracks.length; i++) {
      if (tracks[i].kind === 'subtitles') {
        entries.push({
          type: 'SubtitleMenuItem',
          label: tracks[i].label,
          value: tracks[i]
        });
        // entries.push(new SubtitleMenuItem(this.player_, {track: tracks[i]}));
      }
    }

    return entries;
  }
}

videojs.registerComponent('Subtitle', Subtitle);

export default Subtitle;
