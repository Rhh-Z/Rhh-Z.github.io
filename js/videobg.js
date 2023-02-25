(function createVideo() {
  // 根据不同的url地址播放不同的视频
  // 一个开发环境一个生产环境
  if (location.href === 'http://localhost:4000/' || location.href === 'https://www.rhhz.top/') {
    const video = document.createElement('video')
    video.autoplay = true, video.muted = true, video.loop = true, video.id = 'bg-video'
    const bg = document.getElementById('page-header').appendChild(video)
    bg.style.background = ''
    const source = document.createElement('source')
    source.type = 'video/mp4'
    video.appendChild(source)
    source.src = '/video/bg1.mp4'
  }
  //else if (location.href === 'http://localhost:4000/archives/' || location.href === 'https://www.rhhz.top/archives/') { //为了使文章详情页面不显示此视频，修改其条件
  //   source.src = '/video/cloud2.mp4'
  // } else if (location.href.includes('tags')) {
  //   source.src = '/video/cloud3.mp4'
  // } else if (location.href.includes('music')) {
  //   source.src = '/video/somke.mp4'
  // } else if (location.href.includes('categories')) {
  //   source.src = '/video/bg2.mp4'
  // } else if (location.href.includes('movies')) {
  //   source.src = '/video/bg6.mp4'
  // } else if (location.href.includes('link')) {
  //   source.src = '/video/bg4.mp4'
  // } else if (location.href.includes('comments')) {
  //   source.src = '/video/bg5.mp4'
  // } else if (location.href.includes('images')) {
  //   source.src = '/video/bg7.mp4'
  // } else if (location.href.includes('about')) {
  //   source.src = '/video/bg8.mp4'
  // } else if (location.href.includes('websites')) {
  //   source.src = '/video/bg9.mp4'
  // } else if (location.href === 'http://localhost:4000/gallery/' || location.href === 'https://www.rhhz.top/gallery/') {
  //   bg.style.background = style = "url('https://cdn.staticaly.com/gh/Rhh-Z/PicBed@main/img/bg1.jpg')"
  //   bg.style.backgroundSize = 'inherit'
  // } else if (location.href.includes('http://localhost:4000/gallery/photo/' || location.href === 'https://www.rhhz.top/gallery/photo/')) {
  //   bg.style.background = style = "url('https://cdn.staticaly.com/gh/Rhh-Z/PicBed@main/img/bg2.jpg')"
  //   bg.style.backgroundSize = 'inherit'
  // } else if (location.href.includes('http://localhost:4000/gallery/wallpaper/' || location.href === 'https://www.rhhz.top/gallery/wallpaper/')) {
  //   bg.style.background = style = "url('https://cdn.staticaly.com/gh/Rhh-Z/PicBed@main/img/bg3.jpg.jpg')"
  //   bg.style.backgroundSize = 'inherit'
  // } else if (location.href.includes('http://localhost:4000/shuoshuo/' || location.href === 'https://www.rhhz.top/shuoshuo/')) {
  //   bg.style.background = style = "url('https://cdn.staticaly.com/gh/Rhh-Z/PicBed@main/img/bg4.jpg')"
  //   bg.style.backgroundSize = 'inherit'
  // } else if (location.href.includes('http://localhost:4000/demo/' || location.href === 'https://www.rhhz.top/demo/')) {
  //   bg.style.background = style = "url('https://cdn.staticaly.com/gh/Rhh-Z/PicBed@main/img/bg7.jpg')"
  //   bg.style.backgroundSize = 'inherit'
  // } else if (location.href.includes('bangumis')) {
  //   source.src = 'https://txmov2.a.yximgs.com/upic/2022/11/23/00/BMjAyMjExMjMwMDI1MDJfMjM0NDkwOTU0OF84OTM1MzM3OTY3MV8wXzM=_b_B51b9c96b487f539f48309d2740586a15.mp4', video.muted = false, video.loop = false
  //   // 去掉标题
  //   document.getElementById('site-title').innerHTML = ''
  // }
}())