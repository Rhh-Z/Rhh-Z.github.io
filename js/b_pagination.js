function init() {
  let contentBox = document.querySelector('.bangumis_content_box')
  let bangumis = document.querySelectorAll('.bangumis_item_box')
  let container = document.querySelector('.bangumis_content')
  let arrList = []
  let pageLength = 12
  let totalPage = Math.ceil(bangumis.length / pageLength)
  let page = 1

  function removeBangumis() {
    for (let i = 0; i < bangumis.length; i++) {
      arrList.push(bangumis[i])
      bangumis[i].remove()
    }
  }
  removeBangumis()

  function insertBangumise() {
    for (let i = (page - 1) * pageLength; i < page * pageLength; i++) {
      if (bangumis[i] === undefined) return
      container.append(bangumis[i])
    }
  }
  insertBangumise()

  function createPagination() {
    let ul = document.createElement("ul")
    ul.className = "bangumis_pagination"
    let prevA = document.createElement("a")
    let prevLi = document.createElement("li")
    prevA.className = "bprev"
    prevLi.innerHTML = "上一页"
    prevA.append(prevLi)
    ul.append(prevA)
    for (let i = 1; i <= totalPage; i++) {
      let a = document.createElement("a")
      let li = document.createElement("li")
      a.className = `page${i}`
      li.innerHTML = i
      a.append(li)
      ul.append(a)
    }
    let nextA = document.createElement("a")
    let nextLi = document.createElement("li")
    nextA.className = "bnext"
    nextLi.innerHTML = "下一页"
    nextA.append(nextLi)
    ul.append(nextA)
    contentBox.append(ul)
  }
  createPagination()

  let paginations = document.querySelectorAll("a[class^=page]")
  let prev = document.querySelector(".bprev")
  let next = document.querySelector(".bnext")

  next.addEventListener("click", () => {
    if (page === totalPage) return
    page += 1
    removeBangumis()
    insertBangumise()
    contentBox.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    let current = document.querySelector(".active")
    current.classList.remove("active")
    current.nextSibling.classList.add("active")
  })

  prev.addEventListener("click", () => {
    if (page === 1) return
    page -= 1
    removeBangumis()
    insertBangumise()
    contentBox.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
    let current = document.querySelector(".active")
    current.classList.remove("active")
    current.previousSibling.classList.add("active")
  })

  function initActive() {
    paginations[0].classList.add("active")
  }
  initActive()

  function setActive(target) {
    for (let i = 0; i < paginations.length; i++) {
      paginations[i].classList.remove("active")
    }
    target.classList.add("active")
  }

  function initButton() {
    for (let i = 0; i < paginations.length; i++) {
      paginations[i].addEventListener('click', () => {
        page = i + 1
        removeBangumis()
        insertBangumise()
        contentBox.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })
        setActive(paginations[i])
      })
    }
  }
  initButton()
}

if (location.pathname === '/bangumis/') {
  init()
}
