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
    this.tags.forEach((tag) => console.log(this.title + ": " + tag), this);
  },
};

video.play();
video.showTags();

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
