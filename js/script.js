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

var urls = ['https://www.youtube.com/embed/C7vIeGXlH1M?autoplay=1&controls=0&showinfo=0&loop=1&playlist=C7vIeGXlH1M&start=',
            'https://www.youtube.com/embed/v57zIz9UK_0?autoplay=1&controls=0&showinfo=0&loop=1&playlist=v57zIz9UK_0&start=',
            'https://www.youtube.com/embed/V_bon8DYa6A?autoplay=1&controls=0&showinfo=0&loop=1&playlist=V_bon8DYa6A&start='];

urls = shuffle(urls);

var newUrls = [];

for (var i = 0; i < urls.length; i++) {
  var rando = Math.random() * 1080;
  rando = Math.floor(rando);

  var src = urls[i]+ rando;
  newUrls.push(src);
}

document.getElementById('vid1').src = newUrls[0];
document.getElementById('vid2').src = newUrls[1];
document.getElementById('vid3').src = newUrls[2]
