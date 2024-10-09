import './style.css'
import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
import { MediaPlayer } from './src/index.js'

document.querySelector('#app').innerHTML = `
  <div>
    <header class="site-header">
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Videojs</h1>
    </header>

    <div class="site-content">
      <div id="player"></div>
    </div>

    <footer class="site-footer">
      <p class="read-the-docs">
        @2024 MediaPlayer
      </p>
    </footer>
  </div>
`

MediaPlayer('player', {
  src: '//s3.amazonaws.com/appforest_uf/f1610640658151x624823942451796100/big_buck_bunny.mp4',
  // src: [
  //   {
  //     src: 'https://vjs.zencdn.net/v/oceans.mp4',
  //     type: 'video/mp4'
  //   }, {
  //     src: 'https://vjs.zencdn.net/v/oceans.webm',
  //     type: 'video/webm'
  //   }
  // ],
  poster: '//vjs.zencdn.net/v/oceans.png',
  // width: 500
})
// MediaPlayer(document.querySelector('#counter'))
