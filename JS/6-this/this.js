// method -> obj
// function -> global (window, global)

// global object in browser -> window
// global object in node -> global

console.log("--------method -> obj--------");
const video = {
  title: "video",
  tags: ["a", "b", "c"],
  play() {
    console.log(this);
  },
  showTags() {
    this.tags.forEach((tag) => console.log(this.title + ": " + tag));
  },
};

video.play();
video.showTags();

function playFilm() {
  console.log(this);
}
playFilm.apply({ name: "YazdeGerd Shah" });
playFilm.call({ name: "Javid Shah" });
const fn = playFilm.bind({ name: "Reza Shah" });
fn();

console.log("--------function -> window--------");
function playVideo() {
  console.log(this);
}
playVideo();
console.log("--------function -> global--------");
function Video(title) {
  this.title = title;
  console.log(this);
}
const film = new Video("Shole");
