window.onload = function () {
  navStyle();
  sectionWidth();
};

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

  let list = ["100.","15.85", "35.30.35"]

  for (let i = 0; i < el_main.childElementCount; i++) {
    el_main.children[i].style.width = list[el_main.childElementCount-1].split('.')[i] + "%";
    el_main.children[i].classList.add("show");
    el_main.children[i].style.display = "block";
  }
}

function loadData(file, part,ele_id, myFun) {
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


function importMarkdown(data, part, ele_id){
  document.getElementById(ele_id).innerHTML = marked.parse(data);
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

function importPassageList(data, part, ele_id){
  // 导入书籍列表的函数
  let all = JSON.parse(data)[part];
  let section = document.getElementById(ele_id);
  all.forEach((element) => {

    let div = document.createElement("div");

    let h1 = document.createElement("h1");
    h1.textContent=element["name"].replace("_", " ").replace("Sharp", "#");
    div.appendChild(h1);

    let ul = document.createElement('ul');
    element['passage'].forEach((paslist) => {
      let li = document.createElement('li');
      li.textContent = paslist["passage_name"];
      ul.appendChild(li);
    });
    div.appendChild(ul);
    section.appendChild(div);
  });
}
