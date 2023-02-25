//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = [
  "url(https://s1.vika.cn/space/2023/01/02/349314ec41d848388cbe63236e036f5c)",
  "url(https://s1.vika.cn/space/2022/12/28/d6031931bd8a462883da019fc11b41cf)",
  "url(https://s1.vika.cn/space/2023/01/06/bf8446c79b2e4e44a7b7b684ada4423d)",
  "url(https://s1.vika.cn/space/2023/01/02/986593b130bc45ed86ba58cb9109835e)",
  "url(https://s1.vika.cn/space/2023/01/02/507124cb250a4ea19dc7670f6c9e7eff)",
  "url(https://s1.vika.cn/space/2023/01/10/ab3f70a8953d4e4986a19a83c7703c42)",
  "url(https://s1.vika.cn/space/2022/12/28/da8b4b10210d45ab8a671d28809eac61)",
  "url(https://s1.vika.cn/space/2023/01/02/e009cede4d09484c81e0cac07666fed3)",
  "url(https://s1.vika.cn/space/2023/01/10/fc10719f7e594568aeba8cd0967032fa)",
  "url(https://s1.vika.cn/space/2023/01/06/04d34a8b123e48518ea06d8d5034f7ee)",
  "url(https://s1.vika.cn/space/2023/01/06/33636673664e49f5b6ddc84f236a81b8)",
];
//获取背景图片总数，生成随机数
var bgindex = Math.floor(Math.random() * backimg.length);

bg = document.querySelector("#web_bg")
//重设背景图片

if (location.pathname === '/' || location.pathname.includes('page')) {
  bg.style.backgroundImage = backimg[bgindex];
} else {
  bg.style.backgroundImage = null;
}

// function scrollAnimate() {
//   // 获取当前滚轮位置
//   const scrollY = window.scrollY
//   if (scrollY >= 0 && scrollY <= 600) {
//     bg.style.backgroundPosition = "calc(50% - " + scrollY + "px) calc(50% - " + scrollY + "px)"
//   } else {
//     bg.style.backgroundPosition = ""
//   }
// }

// document.addEventListener('scroll', scrollAnimate)

// if (scrollY >= 600) {
//   document.removeEventListener('scroll', scrollAnimate)
// }

// if (location.pathname === '/about' || location.pathname === '/bangumi') {
//   bg.style.backgroundImage = ''
// }




//随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
// var bannerimg = [
//   "url(/img/bg1.JPG)",
//   "url(/img/bg2.jpg)",
//   "url(/img/bg3.jpg)",
//   "url(/img/bg4.jpg)"
// ];
// //获取banner图片总数，生成随机数
// var bannerindex = Math.floor(Math.random() * bannerimg.length);
// //重设banner图片
// document.getElementById("page-header").style.backgroundImage = bannerimg[bannerindex];