// 侧边栏点击显示隐藏列表项，导入列表项内容
document.addEventListener("DOMContentLoaded", function () {
  let section = document.getElementById("list");
  section.addEventListener("click", function (e) {
    if (e.target.nodeName === "H1") {
      let s = e.target.nextElementSibling.style.display;
      e.target.nextElementSibling.style.display =
        s == "block" ? "none" : "block";
    }

    if (e.target.nodeName == "LI") {
      let file =
        "markdown/" +
        e.target.parentElement.parentElement.firstChild.textContent
          .replace(" ", "_")
          .replace("#", "Sharp") +
        "/" +
        e.target.textContent;
      loadData(file, "null", "article", importMarkdown);
      if(mode_flag == "light")
      document.querySelectorAll('div li').forEach((e)=>{e.style.color='black'});
      else
      document.querySelectorAll('div li').forEach((e)=>{e.style.color='grey'});

      e.target.style.color = '#CCCCCC';
    }
  });
});


// 切换侧边栏
let side_on_flag = true;
document.getElementById("side").onclick = function () {
  if (side_on_flag) {
    document.getElementById("list").style.display = "none";
    document.getElementById("list").style.width = 0;
    document.getElementById("passage").style.width = "100%";
    side_on_flag = false;
  } else {
    document.getElementById("passage").style.width = "85%";
    document.getElementById("list").style.width = "15%";
    document.getElementById("list").style.display = "block";
    side_on_flag = true;
  }
};

