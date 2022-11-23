function createVideo() {
  const video = document.createElement('video')
  video.autoplay = true, video.muted = true, video.loop = true, video.id = 'bg-video'
  const bg = document.getElementById('page-header').appendChild(video)
  bg.style.background = ''
  const source = document.createElement('source')
  source.type = 'video/mp4'
  video.appendChild(source)
  // 根据不同的url地址播放不同的视频
  if (location.href === 'http://localhost:4000/') {
    source.src = '/video/bg1.mp4'
  } else if (location.href === 'http://localhost:4000/music/') {
    source.src = '/video/somke.mp4'
  } else if (location.href === 'http://localhost:4000/tags/') {
    source.src = '/video/cloud3.mp4'
  } else if (location.href === 'http://localhost:4000/tags/') {
    source.src = '/video/cloud4.mp4'
  } else if (location.href === 'http://localhost:4000/categories/') {
    source.src = '/video/bg2.mp4'
  } else if (location.href === 'http://localhost:4000/archives/') {
    source.src = '/video/cloud2.mp4'
  } else if (location.href === 'http://localhost:4000/movies/') {
    source.src = '/video/bg6.mp4'
  } else if (location.href === 'http://localhost:4000/link/') {
    source.src = '/video/bg4.mp4'
  } else if (location.href === 'http://localhost:4000/comments/') {
    source.src = '/video/bg5.mp4'
  } else if (location.href === 'http://localhost:4000/images/') {
    source.src = '/video/bg7.mp4'
  } else if (location.href === 'http://localhost:4000/about/') {
    source.src = '/video/bg8.mp4'
  } else if (location.href === 'http://localhost:4000/bangumis/') {
    source.src = 'https://txmov2.a.yximgs.com/upic/2022/11/23/00/BMjAyMjExMjMwMDI1MDJfMjM0NDkwOTU0OF84OTM1MzM3OTY3MV8wXzM=_b_B51b9c96b487f539f48309d2740586a15.mp4', video.muted = false, video.loop = false
    // 去掉标题
    document.getElementById('site-title').innerHTML = ''
  }
}
createVideo()