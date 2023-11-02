// 获取元素
const openexplButton = document.getElementById("openexpl");
const closeexplButton = document.getElementById("closeexpl");
const expl = document.getElementById("expl");

// 打开弹出窗口
openexplButton.addEventListener("click", function() {
  expl.style.display = "block";
});

// 关闭弹出窗口
closeexplButton.addEventListener("click", function() {
  expl.style.display = "none";
});
