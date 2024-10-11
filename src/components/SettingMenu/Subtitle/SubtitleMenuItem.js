import videojs from 'video.js';

const MenuItem = videojs.getComponent('MenuItem');

class SubtitleMenuItem extends MenuItem {
  constructor(player, options) {
    console.log('SubtitleMenuItem');
    super(player, options);

    this.addClass('vjs-subtitle-menu-item');

    this.track = options.track;
    this.on('click', function () {
      var tracks = player.textTracks();

      for (var i = 0; i < tracks.length; i++) {
        tracks[i].mode = 'disabled';
      }

      this.track.mode = 'showing';

      this.update();
    });
  }

  update() {
    var tracks = this.player_.textTracks();
    var selected = false;

    for (var i = 0; i < tracks.length; i++) {
      if (tracks[i].mode === 'showing' && tracks[i].label === this.track.label) {
        selected = true;
      }
    }

    if (selected) {
      this.addClass('vjs-selected');
    } else {
      this.removeClass('vjs-selected');
    }
  }
}

videojs.registerComponent('SubtitleMenuItem', SubtitleMenuItem);

export default SubtitleMenuItem;
