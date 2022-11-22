// function createVideo() {
//   const video = document.createElement('video')
//   video.autoplay = true, video.muted = true, video.loop = true, video.id = 'bg-video'
//   const bg = document.getElementById('web_bg').appendChild(video)
//   bg.style.background = ''
//   const source = document.createElement('source')
//   source.src = '/img/cloud1.mp4', source.type = 'video/mp4'
//   video.appendChild(source)
// }

// Document.addEventListener("DOMContentLoaded", () => {
//   const lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
//   if ("IntersectionObserver" in window) {
//     const lazyVideoObserver = new IntersectionObserver((entries, observer) => {
//       entries.forEach((video) => { if (video.isIntersecting) { for (const source in video.target.children) { 
//         const videoSrc = video.target.children[source]; 
//         if (typeof videoSrc.tagName === "string" && videoSrc.tagName === " source") { 
//           videoSrc.src = videoSrc.dataset.src; } } video.target.load(); video.target.classList.remove("lazy"); lazyVideoObserver.unobserve(video.target); } })
//     })
//     lazyVideos.forEach((lazyVideo) => { lazyVideoObserver.observe(lazyVideo); });
//   }
// })


createVideo()