import videojs from 'video.js';
import PlaybackRate from './PlaybackRate';

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

    console.log(this.contentEl_);

    this.mainMenuItems = this.children().slice(0);
    this.transform(this.mainMenuItems);
    this.addClass('vjs-setting-menu-ready');
  }

  createEl() {
    const el = super.createEl();

    return el;
  }

  update(children = []) {
    const children_ = this.children().slice(0);

    children_.forEach(child => {
      this.removeChild(child);
    });

    children.forEach(child => {
      this.addChild(child);
    });
  }

  resize({ width, height }) {
    this.contentEl_.style.width = width + 'px';
    // this.contentEl_.style.height = height + 'px';
  }

  transform(items) {
    const dimensions = this.getMenuDimension(items);
    this.update(items);
    this.resize(dimensions);
  }

  restore() {
    this.transform(this.mainMenuItems);
  }

  getMenuDimension(items) {
    const player = this.player_;
    const tempMenu = new SettingMenuTemp(player);

    tempMenu.update(items);
    player.addChild(tempMenu);

    const rect = tempMenu.contentEl_.getBoundingClientRect();

    // remove subMenuItem form tempMenu first, otherwise they will also be disposed
    tempMenu.update();
    tempMenu.dispose();

    // remove tempMenu in `player.children`
    player.removeChild(tempMenu);

    return rect;
  }
}

class SettingMenuTemp extends SettingMenu {
  constructor(player) {
    super(player, {
      name: 'SettingMenuTemp'
    });
  }
}

videojs.registerComponent('SettingMenu', SettingMenu);

export default SettingMenu;
