// 獲取元素
const openexplButton = document.getElementById("openexpl");
const closeexplButton = document.getElementById("closeexpl");
const expl = document.getElementById("expl");

// 打開彈出窗口
openexplButton.addEventListener("click", function() {
  expl.style.display = "block";
});

// 關閉彈出窗口
closeexplButton.addEventListener("click", function() {
  expl.style.display = "none";
});
