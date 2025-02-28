import videojs from 'video.js';

const MenuButton = videojs.getComponent('MenuButton');
const TextTrackMenuItem = videojs.getComponent('TextTrackMenuItem');

class PanelMenuButton extends MenuButton
{
  constructor(player, options) {
    const tracks = player.textTracks();

    super(player, options);

    this.setIcon('cog');
    this.controlText('Panel Menu');
    this.kinds_ = ['captions', 'subtitles'];

    const updateHandler = this.update.bind(this);

    tracks.addEventListener('addtrack', updateHandler);
  }

  buildCSSClass() {
    return `vjs-panel-menu-button ${super.buildCSSClass()}`;
  }

  buildWrapperCSSClass() {
    return `vjs-panel-menu-button-wrapper vjs-panel-menu-button ${super.buildWrapperCSSClass()}`;
  }

  createItems() {
    const items = [];
    const tracks = this.player_.textTracks();

    console.log(this.kinds_);

    if (!Array.isArray(this.kinds_)) {
      this.kinds_ = [this.kind_];
    }

    for (let i = 0; i < tracks.length; i++) {
      const track = tracks[i];

      // only add tracks that are of an appropriate kind and have a label
      if (this.kinds_.indexOf(track.kind) > -1) {

        const item = new TextTrackMenuItem(this.player_, {
          track,
          kinds: this.kinds_,
          kind: this.kind_,
          // MenuItem is selectable
          selectable: true,
          // MenuItem is NOT multiSelectable (i.e. only one can be marked "selected" at a time)
          multiSelectable: false
        });

        item.addClass(`vjs-${track.kind}-menu-item`);
        items.push(item);
      }
    }

    console.log(tracks);
    console.log(items);

    return items;
  }
}

// PanelMenuButton.prototype.options_.children = ['PanelMenu'];

videojs.registerComponent('PanelMenuButton', PanelMenuButton);

export default PanelMenuButton;
