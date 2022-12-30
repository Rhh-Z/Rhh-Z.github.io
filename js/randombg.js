//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg = [
  "url((https://s1.vika.cn/space/2022/12/20/c23de14e373a486eaebd402dfd8cfd2d)",
  "url(https://s1.vika.cn/space/2022/12/28/d6031931bd8a462883da019fc11b41cf)",
  "url(https://s1.vika.cn/space/2022/12/28/bf879ac2e3ec440dac0455230109ea8a)",
  "url(https://s1.vika.cn/space/2022/12/28/7f19ed4103a64903905d3962e950e2a7)",
  "url(https://s1.vika.cn/space/2022/12/24/a1d5f17e39a84439b6baa9dc445535d4)",
  "url(https://s1.vika.cn/space/2022/12/28/624dc46754c14f15833062eb2151c855)",
  "url(https://s1.vika.cn/space/2022/12/28/da8b4b10210d45ab8a671d28809eac61)",

];
//获取背景图片总数，生成随机数
var bgindex = Math.floor(Math.random() * backimg.length);

//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];


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