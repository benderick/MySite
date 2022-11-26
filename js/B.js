// 侧边栏点击显示隐藏列表项，导入列表项内容
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("side").click();

  stream();

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
      if (mode_flag == "light")
        document.querySelectorAll("div li").forEach((e) => {
          e.style.color = "black";
        });
      else
        document.querySelectorAll("div li").forEach((e) => {
          e.style.color = "grey";
        });

      e.target.style.color = "#CCCCCC";
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

function stream() {
  // 01流
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  canvas.height = "1000";
  canvas.width = "1500";

  var texts = "01".split("");

  var fontSize = 20;
  var columns = canvas.width / fontSize;
  // 用于计算输出文字时坐标，所以长度即为列数
  var s = [];
  //初始值
  for (var x = 0; x < columns; x++) {
    s[x] = 1;
  }

  function draw() {
    //让背景逐渐由透明到不透明
    if (mode_flag == "light") {
      ctx.fillStyle = "whitesmoke";
    } else {
      ctx.fillStyle = "#242429";
    }
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //文字颜色
    ctx.fillStyle = "darkcyan";
    ctx.font = fontSize + "px arial";
    //逐行输出文字
    for (var i = 0; i < s.length; i++) {
      var text = texts[Math.floor(Math.random() * texts.length)];
      ctx.fillText(text, i * fontSize, s[i] * fontSize);

      if (s[i] * fontSize > canvas.height || Math.random() > 0.95) {
        s[i] = 0;
      }

      s[i]++;
    }
  }

  setInterval(draw, 50);
}
