sectionWidth("50.50");
// url 转对象
function urlToObj(url) {
  let param = {};
  let pathArr = url.split("?");
  if (pathArr.length > 1)
    pathArr[1].replace(/([^?&]+)=([^?&]+)/g, function (s, v, k) {
      param[v] = decodeURIComponent(k); //解析字符为中文
      console.log(s, v, k);
      return k + "=" + v;
    });

  return {
    path: pathArr[0],
    query: param,
  };
}
const urlObj = urlToObj(location.href);

let img1;
let img2;
// let fontsize = 13;
let font;

let time = new Date().toLocaleString().replaceAll("/", "-");
let tname = urlObj["query"]["name"];
let tcontent = urlObj["query"]["content"];

const sketch1 = (p) => {
  let fontsize1 = 13;
  let fontsize2 = 19;
  p.preload = function () {
    img1 = p.loadImage("images/liuyan.jpg");
    font = p.loadFont("css/font.ttf");
  };
  p.setup = function () {
    p.createCanvas(448, 384);
    p.textFont(font);
    p.imageMode(p.CENTER);
  };

  p.draw = function () {
    p.background(0, 102, 153);
    p.image(img1, img1.width / 2, img1.height / 2);
    p.textSize(fontsize1);
    p.fill(0);
    p.text(tname, 30 + 8 * (5 - tname.length), 300); //左框
    
    p.textSize(fontsize2);
    let per_row = 15;
    let rows = Math.ceil(tcontent.length / per_row);
    for (let r = 0; r <= rows; r++) {
      p.text(
        tcontent.slice(per_row * r, per_row * (r + 1)),
        115,
        320 + (fontsize2 + 5) * r
      );
    }

    p.textSize(fontsize1);
    p.fill("#A5A5A5");
    p.text(time, 170, 295);
  };
};

const sketch2 = (p) => {
  let fontsize = 35;
  p.preload = function () {
    img2 = p.loadImage("images/welcome.jpg");
    font = p.loadFont("css/font.ttf");
  };
  p.setup = function () {
    p.createCanvas(448, 384);
    p.textSize(fontsize);
    p.textFont(font);
    p.imageMode(p.CENTER);
  };

  p.draw = function () {
    p.background(0, 102, 153);
    p.image(img2, img2.width / 2, img2.height / 2);
    p.fill("#A5A5A5");
    
    let per_row = 1;
    let words = "欢迎" + tname;
    let rows = Math.ceil(words.length / per_row);
    for (let r = 0; r <= rows; r++) {
      p.text(
        words.slice(per_row * r, per_row * (r + 1)),
        8,
        70 + (fontsize + 5) * r
      );
    }
  };
};

new p5(sketch1, document.getElementById("msg"));
new p5(sketch2, document.getElementById("pic"));
