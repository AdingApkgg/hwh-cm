var viewImgList = document.getElementById("viewImgList");

document.getElementById("scroll-down").onclick = function () {
  document.documentElement.scrollTop =
    document.getElementById("viewImgList").offsetTop;
};

setInterval(function () {
  viewImgList.scrollTop++;
}, 20);

// Aplayer默认关闭歌词
function removelrc() {
  // 检测是否存在歌词按钮
  const lrcIcon = document.querySelector(".aplayer-icon-lrc");
  if (!lrcIcon) {
    return;
  }

  // 触发以后立刻移除监听
  observer.disconnect();

  // 稍作延时保证触发函数时存在按钮
  setTimeout(() => {
    // 以触发按钮的方式隐藏歌词，防止在点击显示歌词按钮时需要点击两次才能出现的问题
    lrcIcon.click();
  }, 1);
}

const observer = new MutationObserver((mutationsList, observer) => {
  for (let mutation of mutationsList) {
    if (mutation.type === "childList") {
      removelrc();
    }
  }
});

const observerConfig = {
  childList: true, // 观察子节点的变化
  subtree: true, // 观察所有后代节点的变化
};

observer.observe(document, observerConfig); // 开始观察document节点的变化
// Aplayer配置
const ap = new APlayer({
  container: document.getElementById("aplayer"),
  fixed: true,
  autoplay: true,
  theme: "#ff4777",
  loop: "all",
  order: "random",
  preload: "metadata",
  volume: 0.3,
  lrcType: 3,
  listFolded: false,
  listMaxHeight: "36vh",
  audio: [
    {
      name: "流星雨",
      artist: "F4",
      url: "audio/流星雨 - F4.mp3",
      cover: "img/流星雨 - F4.webp",
      lrc: "lrc/流星雨 - F4.lrc",
    },
    {
      name: "我是真的真的很爱你",
      artist: "言承旭",
      url: "audio/我是真的真的很爱你 - 言承旭.mp3",
      cover: "img/我是真的真的很爱你 - 言承旭.webp",
      lrc: "lrc/我是真的真的很爱你 - 言承旭.lrc",
    },
    {
      name: "晴天",
      artist: "朱孝天",
      url: "audio/晴天 - 朱孝天.mp3",
      cover: "img/晴天 - 朱孝天.webp",
      lrc: "lrc/晴天 - 朱孝天.lrc",
    },
    {
      name: "你是我唯一的执着",
      artist: "言承旭",
      url: "audio/你是我唯一的执着 - 言承旭.mp3",
      cover: "img/你是我唯一的执着 - 言承旭.webp",
      lrc: "lrc/你是我唯一的执着 - 言承旭.lrc",
    },
    {
      name: "我没有办法离开你",
      artist: "言承旭",
      url: "audio/我没有办法离开你 - 言承旭.mp3",
      cover: "img/我没有办法离开你 - 言承旭.webp",
      lrc: "lrc/我没有办法离开你 - 言承旭.lrc",
    },
  ],
});
