sectionWidth();

document.addEventListener("DOMContentLoaded", function () {
  let content = document.getElementById("content");
  content.classList.remove("show");
  loadData("msg.json", "all", "swiper", importMsg);
  swiper_circle();
});

function swiper_circle() {
  // swiper绕Y轴循环旋转
  let swiper = document.getElementById("swiper");
  let rotateY = 0;
  function addRotateY() {
    // 每次旋转0.3度
    rotateY = (rotateY + 0.3) % 360;
    swiper.style.transform = `rotateY(${rotateY}deg)`;
  }

  setInterval(() => {
    addRotateY();
  }, 20);
}

function importMsg(data, part, ele_id) {
  // 导入消息
  let all = JSON.parse(data)[part];
  let section = document.getElementById(ele_id);

  let width = 3000 / all.length;

  let widthParent = document.getElementById("swiper").offsetWidth;

  let left_to_parent = (widthParent - width) / 2;
  let degree = 360 / all.length;
  let distance = (all.length * width) / 6;

  all.forEach((element, index) => {
    let div = document.createElement("div");
    div.classList.add("pic-content");
    div.style.width = width + "px";
    div.style.left = left_to_parent + "px";

    div.style.transform = `rotateY(${
      index * degree
    }deg) translateZ(${distance}px)`;

    div.textContent = element["content"];
    section.appendChild(div);
  });
}
