sectionWidth((w = "100."));
document.getElementById("name").onblur = function () {
  if (this.value == "") {
    document.getElementById("namelabel").textContent = "编一个也成!";
    document.getElementById("namelabel").style.color = "red";
  }
};

document.getElementById("name").onfocus = function () {
  document.getElementById("namelabel").textContent = "你叫什么啊？";
  document.getElementById("namelabel").style.color = "black";
};

document.getElementById("content").onblur = function () {
  if (this.value == "") {
    document.getElementById("contentlabel").textContent = "必须得说!";
    document.getElementById("contentlabel").style.color = "red";
  }
};

document.getElementById("content").onfocus = function () {
  document.getElementById("contentlabel").textContent = "你想说些什么？";
  document.getElementById("contentlabel").style.color = "black";
};
