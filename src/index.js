import videojs from 'video.js';
import './MediaPlayer.js';
import './components/ControlBar';
import './components/PanelMenu/PanelMenuItem';
import './components/SettingMenu/SettingMenuButton';

import './index.scss';

export function MediaPlayer(element, options) {
  options = Object.assign({}, {
    autoplay: true,
    controls: true
  }, options) || {};

  // console.log(options);

  var src = 'src' in options ? options.src : '';
  var player = videojs(element, options);
  player.fluid(true);
  // player.aspectRatio('16:9'); // 16:9 | 4:3
  player.loadMedia({
    artist: 'Disney',
    album: 'Oceans',
    title: 'Demo Video',
    description: 'Hello, this is description',
    poster: '//vjs.zencdn.net/v/oceans.png',
    src: src
  });

  var captionTimeToLabel = function (internalTime) {
      return (new Date(internalTime * 1000).toISOString()).substr(11, 12);
  };

  var convertArrayToVtt = function (data) {
    var fileContent = "WEBVTT\r\n\r\n";

    data.forEach(function (value, index) {
      var start = captionTimeToLabel(value['start_time']);
      var end = captionTimeToLabel(value['end_time']);
      var lines = value['text'].join("\r\n");

      fileContent += start + ' --> ' + end + "\r\n";
      fileContent += lines + "\r\n";
      fileContent += "\r\n";
    });

    return fileContent;
  };

  player.on('loadedmetadata', function() {
    var defaultLang = 'en';
    var translateLangs = {
      'en': 'English',
      'vi': 'Vietnam'
    };

    var data = {
      "en":[
        {"start_time":0.27,"end_time":1.97,"text":["If you\u0027re building a website where you\u0027re loading"]},
        {"start_time":1.98,"end_time":3.96,"text":["all of your data at one time you\u0027re"]},
        {"start_time":3.97,"end_time":5.28,"text":["probably doing it wrong"]},
        {"start_time":5.42,"end_time":8.21,"text":["You could be wasting valuable time and resources"]}
      ],
      "vi":[
        {"start_time":0.27,"end_time":1.97,"text":["Viet 11111"]},
        {"start_time":1.98,"end_time":3.96,"text":["Viet 22222"]},
        {"start_time":3.97,"end_time":5.28,"text":["Viet 33333"]},
        {"start_time":5.42,"end_time":8.21,"text":["Viet 44444"]}
      ]
    };

    // var remoteTracks = player.remoteTextTracks();
    Object.keys(translateLangs).forEach(function(key) {
        var blob = new Blob([convertArrayToVtt(data[key])], {type : 'text/vtt'});
        var trackEl = player.addRemoteTextTrack({
            src: URL.createObjectURL(blob),
            kind: 'subtitles',
            mode: (key === defaultLang) ? 'showing' : 'disabled',
            language: key,
            srcLang: '' + key,
            label: translateLangs[key]
        }, true);

        // trackEl.addEventListener('load', function() {
        //     // Action in here...
        //     console.log('track load.');
        // });
    });
  });

  return player;
}

