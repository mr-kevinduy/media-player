import videojs from 'video.js';
import SettingMenu from './index.js';

import './PlaybackRate';
import './Subtitle';

const MenuButton = videojs.getComponent('MenuButton');

class SettingMenuButton extends MenuButton {
  constructor(player, options) {
    super(player, options);

    // move menu to player
    player.addChild(this.menu);

    // remove videojs parent child relationship between button and menu
    this.removeChild(this.menu);

    // this.addClass('vjs-setting-button-control');
    this.controlText(options.text || 'Settings');

    this.el_.getElementsByClassName('vjs-icon-placeholder')[0].classList.add('vjs-icon-cog');
    // this.el_.getElementsByClassName('vjs-icon-placeholder')[0].innerHTML = '<svg data-v-e084463a="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" class="h-6 text-teal-400 xl:h-8"><path d="M20.088 1.564a14.91 14.91 0 0 1 3.229 1.338l-.104 1.642a4 4 0 0 0 1.164 3.079 4 4 0 0 0 3.079 1.164l1.642-.104a14.91 14.91 0 0 1 1.338 3.23L29.201 13a4 4 0 0 0-1.354 3 4 4 0 0 0 1.354 3l1.235 1.088c-.318 1.125-.767 2.209-1.338 3.229l-1.642-.104a4 4 0 0 0-3.079 1.164 4 4 0 0 0-1.164 3.079l.104 1.642c-1.02.571-2.105 1.02-3.23 1.338L19 29.201a4 4 0 0 0-3-1.354 4 4 0 0 0-3 1.354l-1.088 1.235c-1.125-.318-2.209-.767-3.229-1.338l.104-1.642a4 4 0 0 0-1.164-3.079 4 4 0 0 0-3.079-1.164l-1.642.104a14.91 14.91 0 0 1-1.338-3.23L2.799 19a4 4 0 0 0 1-1.354A4 4 0 0 0 4.153 16a4 4 0 0 0-.354-1.646 4 4 0 0 0-1-1.354l-1.235-1.088a14.91 14.91 0 0 1 1.338-3.229l1.642.104a4 4 0 0 0 3.079-1.164 4 4 0 0 0 1.164-3.079l-.104-1.642c1.02-.571 2.105-1.02 3.23-1.338L13 2.799a4 4 0 0 0 1.354 1A4 4 0 0 0 16 4.153a4 4 0 0 0 1.646-.354 4 4 0 0 0 1.354-1l1.088-1.235z"></path><path d="M16 21a5 5 0 1 0 0-10 5 5 0 1 0 0 10z"></path></svg>';
  }

  buildCSSClass() {
    return `vjs-setting-button ${super.buildCSSClass()}`;
  }

  buildWrapperCSSClass() {
    return `vjs-setting-button vjs-setting-button-wrapper ${super.buildWrapperCSSClass()}`;
  }

  createMenu() {
    var menu = new SettingMenu(this.player_, {
      menuButton: this
    });

    const entries = this.options_.entries || [];
    entries.forEach(componentName => {
      // menu.addItem(componentName);
      const component = menu.addChild(componentName, {
        menu
      });
      menu[componentName] = component;
    });

    return menu;
  }

  hideMenu() {
    this.unpressButton();
    this.el_.blur();
  }

  pressButton() {
    super.pressButton();
    this.menu.init();
  }

  unpressButton() {
    super.unpressButton();
    this.player_.removeClass('vjs-keep-control-showing');
  }

  // handleClick() {
  //   this.player_.addClass('vjs-keep-control-showing');

  //   if (this.buttonPressed_) {
  //     this.unpressButton();
  //   } else {
  //     this.pressButton();
  //   }

  //   this.off(document.body, 'click', this.hideMenu);

  //   setTimeout(() => {
  //     this.one(document.body, 'click', this.hideMenu);
  //   }, 0);
  // }
}

// SettingMenuButton.prototype.controlText_ = 'Settings';
SettingMenuButton.prototype.options_ = {
  entries: [
    'PlaybackRate',
    'Subtitle'
  ]
};

videojs.registerComponent('SettingMenuButton', SettingMenuButton);

export default SettingMenuButton;
