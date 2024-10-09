import videojs from 'video.js';

const MenuItem = videojs.getComponent('MenuItem');

class PanelMenuItem extends MenuItem {
  constructor(player, options) {
    console.log('PanelMenuItem');
    super(
      player,
      videojs.mergeOptions(
        {
          selectable: false
        },
        options
      )
    );


    this.setEntries(this.options_.entries);

    if (!this.entries.length) {
      this.hide();
    }

    // this.menu = options.menu;
  }

  createEl() {
    const { icon, label } = this.options_;
    const el = videojs.dom.createEl('li', {
      className: 'vjs-menu-item vjs-setting-menu-item ss',
      innerHTML: `
        <div class="vjs-icon-placeholder ${icon || ''}"></div>
        <div class="vjs-setting-menu-label">${this.localize(label)}</div>
        <div class="vjs-spacer"></div>
      `
    });

    this.selectedValueEl = videojs.dom.createEl('div', {
      className: 'vjs-setting-menu-value'
    });

    el.appendChild(this.selectedValueEl);

    return el;
  }

  setEntries(entries_ = [], selectedIndex) {
    Object.assign(this, parseEntries(entries_, selectedIndex));
  }
}

videojs.registerComponent('PanelMenuItem', PanelMenuItem);

export default MenuItem;
