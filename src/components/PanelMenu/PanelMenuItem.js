import videojs from 'video.js';
import { parseEntries } from '../../helpers';

import SubtitleMenuItem from '../SettingMenu/Subtitle/SubtitleMenuItem';

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


    this.setEntries(this.options_.entries || []);

    // if (!this.entries.length) {
    //   this.hide();
    // }

    this.menu = options.menu;
  }

  createEl() {
    const { icon, label } = this.options_;
    const el = videojs.dom.createEl('li', {
      className: 'vjs-menu-item vjs-panel-menu-item',
      innerHTML: `
        <div class="vjs-icon-placeholder ${icon || ''}"></div>
        <div class="vjs-menu-item-label">${this.localize(label)}</div>
        <div class="vjs-spacer"></div>
      `
    });

    this.selectedValueEl = videojs.dom.createEl('div', {
      className: 'vjs-menu-item-value'
    });

    el.appendChild(this.selectedValueEl);

    return el;
  }

  handleClick() {
    console.log('PanelMenuItem click');
    this.menu.transform(this.subMenuItems);
  }

  select(index) {
    this.selected = this.entries[index];
    this.updateSelectedValue();
  }

  updateSelectedValue() {
    if (this.selected) {
      this.selectedValueEl.innerHTML = this.localize(this.selected.label);
    }
  }

  setEntries(entries_ = [], selectedIndex) {
    Object.assign(this, parseEntries(entries_, selectedIndex));

    this.updateSelectedValue();

    console.log('this entries', this.entries);

    this.subMenuItems = [
      ...this.entries.map(({ type, label, value }, index) => {
        console.log("label", label);
        console.log("value", value);
        console.log("index", index);
        if (type === 'SubtitleMenuItem') {
          // var subtitles = [];
          // var tracks = this.player_.textTracks();
          // for (var i = 0; i < tracks.length; i++) {
          //   if (tracks[i].kind === 'subtitles') {
          //     subtitles.push(new SubtitleMenuItem(this.player_, {track: tracks[i]}));
          //   }
          // }

          return new SubtitleMenuItem(this.player_, {label, track: value});
          // console.log("label", label);
          // console.log("value", value);
          // console.log("index", index);
        }
        // const { label, value } = entry;
        return new MenuItem(this.player_, {});
      })
    ];

    console.log('subMenuItems: ', this.subMenuItems);
  }
}

videojs.registerComponent('PanelMenuItem', PanelMenuItem);

export default PanelMenuItem;
