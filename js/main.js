var viewImgList = document.getElementById("viewImgList");

document.getElementById("scroll-down").onclick = function () {
  document.documentElement.scrollTop =
    document.getElementById("viewImgList").offsetTop;
};

setInterval(function () {
  viewImgList.scrollTop++;
}, 20);
