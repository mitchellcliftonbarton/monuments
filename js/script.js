function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var urls = ['https://www.youtube.com/embed/vcAO0UO5Rtk?autoplay=1&controls=0&showinfo=0&loop=1&playlist=vcAO0UO5Rtk&start=',
            'https://www.youtube.com/embed/cVyavExCJ50?autoplay=1&controls=0&showinfo=0&loop=1&playlist=cVyavExCJ50&start=',
            'https://www.youtube.com/embed/fdxu5aRRT24?autoplay=1&controls=0&showinfo=0&loop=1&playlist=fdxu5aRRT24&start='];

urls = shuffle(urls);

var newUrls = [];

for (var i = 0; i < urls.length; i++) {
  var rando = Math.random() * 250;
  rando = Math.floor(rando);

  var src = urls[i]+ rando;
  newUrls.push(src);
}

document.getElementById('vid1').src = newUrls[0];
document.getElementById('vid2').src = newUrls[1];
document.getElementById('vid3').src = newUrls[2]
