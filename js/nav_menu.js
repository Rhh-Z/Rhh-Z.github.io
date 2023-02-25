// 返回顶部 显示网页阅读进度
window.onscroll = percent; // 执行函数
// 页面百分比
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // 整个网页高度 减去 可视高度
    result = Math.round((a / b) * 100), // 计算百分比
    btn = document.querySelector("#percent"); // 获取图标

  result <= 99 || (result = 100), (btn.innerHTML = result);
}

window.onpopstate = move;

function move() {
  let subtitle = document.getElementById("page-name")
  // 获取当前小时
  let hour = new Date().getHours()
  if (location.pathname === '/') {
    document.getElementById("site-title").innerText = "欢迎来到Rhhの时间小屋"
    // 修改菜单栏显示文字
    if (hour < 6) {
      subtitle.innerText = '现在已经凌晨了，熬夜对身体不好哦！'
    }
    if (6 <= hour && hour < 12) {
      subtitle.innerText = '早上好！祝你有个美好的一天！'
    }
    if (12 <= hour && hour < 14) {
      subtitle.innerText = '中午好！忙碌的一天记得午休哦！'
    }
    if (14 <= hour && hour < 18) {
      subtitle.innerText = '下午好！工作和学习之余也不要忘了犒劳自己！'
    }
    if (18 <= hour && hour < 24) {
      subtitle.innerText = '晚上好！要注意早点休息哦!'
    }
  }

  if (location.pathname !== '/') {
    subtitle.innerText = document.title.split(" | Rhh")[0];
  }
}

move()
