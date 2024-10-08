import videojs from 'video.js';

const Menu = videojs.getComponent('Menu');

class SettingMenu extends Menu {
  constructor(player, options) {
    super(player, {
      ...options,
      name: 'SettingMenu'
    });

    this.addClass('vjs-setting-menu');
  }

  init() {
    if (!this.contentEl_) {
      return;
    }

    this.addClass('vjs-setting-menu-ready');
  }

  createEl() {
    const el = super.createEl();
    // const layer = new CloseSettingMenu(this.player_, {
    //   menu: this
    // });

    // el.insertBefore(layer.el_, el.firstElementChild);

    return el;
  }

  // update(children = []) {
  //   const children_ = this.children().slice(0);

  //   children_.forEach(child => {
  //     this.removeChild(child);
  //   });

  //   children.forEach(child => {
  //     this.addChild(child);
  //   });
  // }

  // resize({ width, height }) {
  //   this.contentEl_.style.width = width + 'px';
  //   this.contentEl_.style.height = height + 'px';
  // }

  // getMenuDimension(items) {
  //   const player = this.player_;
  //   const tempMenu = new SettingMenuTemp(player);

  //   tempMenu.update(items);
  //   player.addChild(tempMenu);

  //   const rect = tempMenu.contentEl_.getBoundingClientRect();

  //   // remove subMenuItem form tempMenu first, otherwise they will also be disposed
  //   tempMenu.update();
  //   tempMenu.dispose();

  //   // remove tempMenu in `player.children`
  //   player.removeChild(tempMenu);

  //   return rect;
  // }

  // transform(items) {
  //   const dimensions = this.getMenuDimension(items);
  //   this.update(items);
  //   this.resize(dimensions);
  // }

  // restore() {
  //   this.transform(this.mainMenuItems);
  // }

  // removeStyle() {
  //   this.contentEl_.removeAttribute('style');
  // }

  // hide() {
  //   // Disable default hide function
  //   // As the default hide function violate the calculation of menu dimension
  // }
}

videojs.registerComponent('SettingMenu', SettingMenu);

export default SettingMenu;
