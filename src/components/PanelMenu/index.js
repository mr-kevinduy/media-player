import videojs from 'video.js';

const Menu = videojs.getComponent('Menu');

class PanelMenu extends Menu {
  constructor(player, options) {
    super(player, options);
  }
}

videojs.registerComponent('PanelMenu', PanelMenu);

export default PanelMenu;
