const info1DotsBox = document.querySelector(".info1-dots-vector");
const info1BlueDotsBox = document.querySelector(".info1-blue-dots-vector");
const ourTeamDotsBox = document.querySelector(".our-team-dots-vector");

if (info1DotsBox) {
  for (let i = 0; i < 55; i++) {
    const dot = document.createElement("div");
    info1DotsBox.appendChild(dot);
  }
}

if (info1BlueDotsBox) {
  for (let i = 0; i < 120; i++) {
    const dot = document.createElement("div");
    info1BlueDotsBox.appendChild(dot);
  }
}

if (ourTeamDotsBox) {
  for (let i = 0; i < 108; i++) {
    const dot = document.createElement("div");
    ourTeamDotsBox.appendChild(dot);
  }
}
