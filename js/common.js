navStyle();
let mode_flag = hrefInfo();
setMode()

document.addEventListener("DOMContentLoaded", function () {
  sectionWidth();
  modeChange();
  href();
});

function navStyle() {
  // 根据网页，设置导航栏样式
  let num_str = location.pathname.split(".")[0][1];
  let num =
    num_str == "B"
      ? 0
      : num_str == "A"
      ? 1
      : num_str == "i"
      ? 2
      : num_str == "N"
      ? 3
      : 4;
  let ul = document.querySelector("header ul");
  ul.children[num].classList.add("selected");
}

function sectionWidth() {
  // 根据main种section元素个数，设置相应宽度
  let el_main = document.querySelector("main");

  let list = ["100.", "15.85", "30.40.30"];

  for (let i = 0; i < el_main.childElementCount; i++) {
    el_main.children[i].style.width =
      list[el_main.childElementCount - 1].split(".")[i] + "%";
    el_main.children[i].classList.add("show");
    el_main.children[i].style.display = "block";
  }
}

function loadData(file, part, ele_id, myFun) {
  // 根据Json文件名和自定函数，将数据导入相应页面
  var url = "data/" + file;
  // 申明一个XMLHttpRequest
  var request = new XMLHttpRequest();
  // 设置请求方法与路径
  request.open("get", url);
  // 不发送数据到服务器
  request.send(null);
  //XHR对象获取到返回信息后执行

  request.onload = function () {
    // 返回状态为200，即为数据获取成功
    if (request.status == 200) {
      myFun(request.responseText, part, ele_id);
    }
  };
}

function importQuote(data, part, ele_id) {
  // 导入引用的函数
  let all_quotes = JSON.parse(data)[part];
  all_quotes.forEach((element) => {
    let quote = document.createElement("blockquote");
    quote.textContent = element["content"];
    let cite = document.createElement("cite");
    cite.textContent = element["author"];
    quote.appendChild(cite);
    let quote_section = document.getElementById(ele_id);
    quote_section.appendChild(quote);
  });
}


function hrefInfo() {
  return location.search.includes("dark") ? "dark" : "light";
}

function setMode() {
  // 改变白天黑暗模式
  if (mode_flag === "dark") {
    document.getElementsByTagName("body")[0].classList.add("dark");
    document.querySelector(".selected").style.backgroundColor = "#242429";
    mode_flag = "dark";
  } else {
    document.getElementsByTagName("body")[0].classList.remove("dark");
    document.querySelector(".selected").style.backgroundColor = "whitesmoke";
    mode_flag = "light";
  }
}

function modeChange() {
  // 点击改变白黑模式
  document.getElementById("mode").onclick = function () {
    mode_flag = mode_flag == "dark" ? "light" : "dark";
    setMode();
  };
}

function href() {
  let a = document.querySelectorAll("nav a");
  a.forEach((emement) => {
    emement.onclick = function () {
      location.href = emement.getAttribute("ref") + "?" + mode_flag;
    };
  });
}
