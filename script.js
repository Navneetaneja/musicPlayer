fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    for (var i = 0; i < data.length; i++) {
      const element = document.getElementsByClassName("queue-content")[0];
      if (element) {
        element.insertAdjacentHTML(
          "beforeend",
          `<div style="display:flex;justify-content:space-between;align-items:center;margin:10px;">
        <div style="display:flex;justify-content:center;align-items:center;">
          <div style="margin:10px">${i + 1}</div>
          <div style="margin:10px"><img style="height:50px;width:50px;border-radius:8px;" src="${
            data[i].image
          }"></div>
          <div style="margin:10px"><div>${data[i].name}</div><div>${
            data[i].artist
          }</div></div>
          </div>
          <div><i class="far fa-heart"></i></div>
        </div>`
        );
      }
    }
  });

function showDropdown() {
  document.getElementsByClassName("dropdown")[0].style.display = "block";
}

window.addEventListener("click", (e) => {
  if (
    e.target.className == "fas fa-chevron-down" ||
    e.target.className == "dropdown" ||
    e.target.className == "playlist" ||
    e.target.className == "line" ||
    e.target.className == "favourite"
  ) {
    document.getElementsByClassName("dropdown")[0].style.display = "block";
  } else if (
    e.target.className == "fas fa-ellipsis-h ellipsis" ||
    e.target.className == "music-dropdown" ||
    e.target.className == "music-container"
  ) {
    document.getElementsByClassName("music-dropdown")[0].style.display =
      "block";
  } else {
    document.getElementsByClassName("dropdown")[0].style.display = "none";
    document.getElementsByClassName("music-dropdown")[0].style.display = "none";
  }
});
var images = [1, 2, 3];
const interval = setInterval(() => {
  const element = document.getElementsByClassName("left")[0];
  if (element) {
    element.innerHTML = `<img src='assets/caraousel-${images[0]}.jpeg' class='caraousel-img' />`;
    document.getElementsByClassName(
      "center"
    )[0].innerHTML = `<div class="bottom-layer">
  <img src="assets/caraousel-${images[1]}.jpeg" class="caraousel-img" />
</div>
<div class="top-layer">
  <img src="assets/caraousel-${images[1]}.jpeg" class="caraousel-img" />
</div>`;
    document.getElementsByClassName(
      "right"
    )[0].innerHTML = `<img src='assets/caraousel-${images[2]}.jpeg' class='caraousel-img' />`;
    let removed = images.shift();
    images.push(removed);
  }
}, 4000);

function showMusicDropdown() {
  document.getElementsByClassName("music-dropdown")[0].style.display = "block";
}

function showControls(event) {
  // console.log(event.target.attributes["data-song"].value);
  let songID = event.target.attributes["data-song"].value;
  document.getElementsByClassName("player-song")[0].innerHTML = `${songID}`;

  document.querySelector("#song").src = `./songs/${songID}.mp3`;
}

function showQueue() {
  document.getElementsByClassName("right-main")[0].style.display = "block";
  document.getElementsByClassName("fas fa-music")[0].style.display = "none";
  document.getElementsByClassName("close")[0].style.display = "block";
}

function hideQueue() {
  document.getElementsByClassName("right-main")[0].style.display = "none";
  document.getElementsByClassName("fas fa-music")[0].style.display = "block";
  document.getElementsByClassName("close")[0].style.display = "none";
}

window.addEventListener("resize", () => {
  if (document.body.clientWidth >= 890) {
    document.getElementsByClassName("right-main")[0].style.display = "block";
  } else {
    document.getElementsByClassName("right-main")[0].style.display = "none";
  }
});
