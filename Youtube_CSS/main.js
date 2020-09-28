const moreBtn = document.querySelector(".info .metadata .moreBtn");
const title = document.querySelector(".info .metadata .title");

moreBtn.addEventListener("click", () => {
  console.log("clicked"); // 이건 나오지?
  // chrome 브라우저에서 console.
  moreBtn.classList.toggle("clicked");
  title.classList.toggle("clamp");
});
