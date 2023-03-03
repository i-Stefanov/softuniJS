function songs(list) {
  class Song {
    constructor(type, name, time) {
      (this.type = type), (this.name = name), (this.time = time);
    }
  }
  let songs = [];
  let numberOfSongs = list.shift();
  let songType = list.pop();
  for (let i = 0; i < numberOfSongs; i++) {
    let [type, name, time] = list[i].split(`_`);
    let song = new Song(type, name, time);
    songs.push(song);
  }
  if (songType === `all`) {
    songs.forEach((i) => console.log(i.name));
  } else {
    let filtered = songs.filter((i) => i.type === songType);
    filtered.forEach((i) => {
      console.log(i.name);
    });
  }
}
songs([
  4,
  "favourite_DownTown_3:14",
  "listenLater_Andalouse_3:24",
  "favourite_In To The Night_3:58",
  "favourite_Live It Up_3:48",
  "listenLater",
]);
