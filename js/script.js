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

var urls = ['https://www.youtube.com/embed/YGWaeGFTSgk?autoplay=1&controls=0&showinfo=0&loop=1&playlist=YGWaeGFTSgk&start=',
            'https://www.youtube.com/embed/UYQYDhUttYY?autoplay=1&controls=0&showinfo=0&loop=1&playlist=UYQYDhUttYY&start=',
            'https://www.youtube.com/embed/7BeAkW37nwc?autoplay=1&controls=0&showinfo=0&loop=1&playlist=7BeAkW37nwc&start=',
            'https://www.youtube.com/embed/0L2qnEhOLkI?autoplay=1&controls=0&showinfo=0&loop=1&playlist=0L2qnEhOLkI&start=',
            'https://www.youtube.com/embed/Tf7Sx-7KfWw?autoplay=1&controls=0&showinfo=0&loop=1&playlist=Tf7Sx-7KfWw&start='];

urls = shuffle(urls);

var newUrls = [];

for (var i = 0; i < urls.length; i++) {
  var rando = Math.random() * 600;
  rando = Math.floor(rando);

  var src = urls[i]+ rando;
  newUrls.push(src);
}

document.getElementById('vid1').src = newUrls[0];
document.getElementById('vid2').src = newUrls[1];
document.getElementById('vid3').src = newUrls[2];
document.getElementById('vid4').src = newUrls[3];
document.getElementById('vid5').src = newUrls[4];

window.console.log(newUrls);

/////// TEXT PART ////////

// var bars = [$('.bar-1'),
//             $('.bar-2'),
//             $('.bar-3'),
//             $('.bar-4')];
//
// $(window).on('load', function() {
//   var lOr = ['left', 'right'];
//   var tOb = ['top', 'bottom'];
//   var index = 0;
//
//   var switchy;
//
//   function strobe() {
//     var rando1 = Math.random() * 10;
//     rando1 = Math.floor(rando1);
//     var rando2 = Math.random() * 10;
//     rando2 = Math.floor(rando2);
//
//     var rando3 = Math.random() * 80;
//     rando3 = Math.floor(rando3);
//     var rando4 = Math.random() * 80;
//     rando4 = Math.floor(rando4);
//
//     var current = bars[(index++) % bars.length];
//     $('.text').css('display', 'none');
//     $(current).css('display', 'block');
//     $(current).css(lOr[rando1 % lOr.length], rando3 + '%');
//     $(current).css(tOb[rando2 % tOb.length], rando4 + '%');
//     window.console.log('strobing');
//   }
//
//   function switching() {
//     strobe();
//     switchy = setInterval(strobe, 30000);
//   }
//
//   switching();
// });
