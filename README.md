https://pong420.github.io/videojs-plus/docs/#/./features/context-menu
https://github.com/Pong420/videojs-plus/blob/master/source/Components/SettingMenu/Item/SettingOptionItem.js

https://paul-testing-4.bubbleapps.io/web_videos
https://paul-testing-4.bubbleapps.io/version-test/transcription
https://forum.bubble.io/t/plugin-videojs-advanced-youtube-vimeo-wistia-hls-dash-mux-pre-roll-ads-plus-more/132751
https://github.com/iandevlin/iandevlin.github.io/blob/master/mdn/video-player/js/video-player.js
https://raw.githubusercontent.com/iandevlin/iandevlin.github.io/master/mdn/video-player-with-captions/subtitles/vtt/sintel-de.vtt

https://stackoverflow.com/questions/65303732/how-to-merge-video-js-buttons-into-one
https://jsfiddle.net/exception777/xsucrz1m/32/

https://github.com/videojs/video.js/discussions/8064
https://github.com/BrightcoveOS/videojs-captions-toggle/blob/master/lib/videojs-captions-toggle.js

https://videojs.com/guides/components/
https://videojs.com/blog/videojs-8-and-vhs-3/


# Data Type


<MenuButton>
<Menu>
  <MenuItem_1>
    <MenuItem_11>
      <MenuContent>
        <MenuItem_111>
        <MenuItem_112>
        <MenuItem_113>
    <MenuItem_12>
    <MenuItem_13>
    <MenuItem_14>
  <MenuItem_2>
  <MenuItem_3>

<SettingMenu> extends <Menu>
  <TextExampleMenuItem> extends <MenuItem>
  <SelectableExampleMenuItem> extends <MenuItem>
    <TextExampleMenuItemList> extends <MenuItem>
  <SubtitleMenuItem> extends <MenuItem>
  <PlaybackRateMenuItem> extends <MenuItem>
  <QualityMenuItem> extends <MenuItem>

SettingMenu::_children = [
  TextExampleMenuItem,
  SelectableExampleMenuItem,
  SubtitleMenuItem,
  PlaybackRateMenuItem,
  QualityMenuItem,
]
SelectableExampleMenuItem::_children = [
  TextExampleMenuItemList,
]
