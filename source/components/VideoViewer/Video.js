import React from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import vjsDownLoad from './component/vjsDownLoad';
import { zh_CN } from './lang/zh-CN';

videojs.addLanguage("zh-CN",zh_CN);

require('!style-loader!css-loader!video.js/dist/video-js.css');
require('!style-loader!css-loader!./style/Video.css');

export default class VideoViewer extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: 'fishd-video-js video-js',
    width: 640,                   // 视频容器的宽度
    height: 360,                  // 视频容器的高度
    poster: '',                   // 播放前显示的视频画面，播放开始之后自动移除。通常传入一个URL
    sources: [],                  // 资源文件，
    autoPlay: false,              // 播放器准备好之后，是否自动播放
    loop: false,                  // 视频播放结束后，是否循环播放
    muted: false,                 // 是否静音
    preload: 'none',              // 预加载('auto' 自动 ’metadata' 元数据信息 ，比如视频长度，尺寸等 'none'  不预加载任何数据，直到用户开始播放才开始下载)
    controls: true,               // 是否显示控制条
    download: false               // 是否显示下载按钮
  }

  constructor(props) {
    super(props);
  }

  componentDidMount () {
    const initOptions = {
      //aspectRatio: '16:9',
      //autoSetup: false,
      //fluid: true,
      //inactivityTimeout: 3000,
      //liveui: true,
      //notSupportedMessage: '',
      //responsive: true,
      //bigPlayButton: this.props.bigPlayButton === 'undefined' ? true : this.props.bigPlayButton,
      controlBar: {
        children: [
          {
            name: 'progressControl'
          },
          {
            name: 'playToggle',
            replay: false
          },
          {
            name: 'currentTimeDisplay',

          },
          {
            name: 'timeDivider',
          },
          {
            name: 'durationDisplay'
          },
          {
            name: 'fullscreenToggle'
          },
          {
            name: this.props.download ? 'vjsDownLoad' : ''
          },
          {
            name: 'volumePanel',
            inline: false
          },
        ]
      },
      ErrorDisplay: true,
    };
    const option = Object.assign({}, initOptions, this.props);
    // instantiate video.js
    this.player = videojs(this.videoNode, option, function onPlayerReady() {
      console.log('onPlayerReady', this)
    })
  }

  // destroy player on unmount
  componentWillUnmount () {
    if (this.player) {
      this.player.dispose()
    }
  }

  getVideoPlayer = () => {
    return this.player;
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/ video.js /pull/3856
  render () {
    const {
      className,
      ...otherProps
    } = this.props;

    return (
      <div data-vjs-player>
        <video
          ref={node => this.videoNode = node}
          className={className}
          {...otherProps}
        />
      </div>
    )
  }
}
