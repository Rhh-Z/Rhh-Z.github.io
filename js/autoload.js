function showLive() {
  "use strict";

  if (!CSS.supports("clip-path", "circle(120px at center)")) {
    document.getElementById("stage").innerHTML = '<img src="../assets/screenshot-1.png">';
    return;
  }

  const apiPath = "https://live2d.fghrsh.net/api";
  let state = 0, loading = false,
    modelId = localStorage.getItem("modelId"),
    modelTexturesId = localStorage.getItem("modelTexturesId");
  if (modelId === null) {
    modelId = 6;
    modelTexturesId = 5;
  }
  loadModel(modelId, modelTexturesId);

  function loadModel(modelId, modelTexturesId) {
    localStorage.setItem("modelId", modelId);
    if (modelTexturesId === undefined) modelTexturesId = 0;
    localStorage.setItem("modelTexturesId", modelTexturesId);
    loadlive2d("live2d", `${apiPath}/get/?id=${modelId}-${modelTexturesId}`, null);
    console.log("live2d", `模型 ${modelId}-${modelTexturesId} 加载完成`);
    setTimeout(() => {
      coverPosition("80%");
      state = 2;
    }, 2000);
  }

  function loadRandModel() {
    const modelId = localStorage.getItem("modelId"),
      modelTexturesId = localStorage.getItem("modelTexturesId");
    fetch(`${apiPath}/rand_textures/?id=${modelId}-${modelTexturesId}`)
      .then(response => response.json())
      .then(result => {
        loadModel(modelId, result.textures.id);
        setTimeout(() => {
          state = 2;
          coverPosition("80%");
          loading = false;
        }, 1000);
      });
  }

  function loadOtherModel() {
    const modelId = localStorage.getItem("modelId");
    fetch(`${apiPath}/switch/?id=${modelId}`)
      .then(response => response.json())
      .then(result => {
        loadModel(result.model.id);
        setTimeout(() => {
          state = 2;
          coverPosition("80%");
          loading = false;
        }, 1000);
      });
  }

  function coverPosition(pos) {
    document.getElementById("cover").style.bottom = pos;
  }

  document.getElementById("info").addEventListener("click", () => {
    fetch("https://v1.hitokoto.cn")
      .then(response => response.json())
      .then(result => {
        document.getElementById("yiyan-content").innerText = result.hitokoto + '------' + result.from
      });
  })
  document.getElementById("info").click()

  document.getElementById("skin").addEventListener("click", () => {
    if (loading) return;
    state = 0;
    coverPosition("10%");
    loading = true;
    setTimeout(loadOtherModel, 1000);
  });

  document.getElementById("model").addEventListener("click", () => {
    if (loading) return;
    state = 0;
    coverPosition("10%");
    loading = true;
    setTimeout(loadRandModel, 1000);
  });
}
if (location.pathname === '/about/') {
  showLive()
}