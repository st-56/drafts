// 获取元素
const openexpl1Button = document.getElementById("openexpl1");
const closeexpl1Button = document.getElementById("closeexpl1");
const expl1 = document.getElementById("expl1");

// 打开弹出窗口
openexpl1Button.addEventListener("click", function() {
  expl1.style.display = "block";
});

// 关闭弹出窗口
closeexpl1Button.addEventListener("click", function() {
  expl1.style.display = "none";
});
