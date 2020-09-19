let action = anime({
  //the div with a class of box
  targets: 'div.box',
  //translateX if you want to move the object along X-axis left/right
  translateY: [
    { value: 200, duration: 500 },
    { value: 0, duration: 800 },
  ],
  // translateX: anime.stagger(150),
  rotate: {
    value: '2turn',
    easing: 'easeInOutSine',
  },
  backgroundColor: 'green',
  delay: function (elem, idx, targetLength) {
    return idx * 1000;
  },
  autoplay: false,
  loop: true,
});

// built in API
// action.play();

//id = boxes, className
document.querySelector('#boxes .play').onclick = action.play;
document.querySelector('#boxes .pause').onclick = action.pause;

//
let textAction = anime({
  targets: '.text',
  scale: [3, 1],
  translateY: [
    { value: -80, duration: 700 },
    { value: 0, duration: 800 },
  ],
  rotate: {
    value: '8turn',
    easing: 'easeInOutSine',
  },
  easing: 'easeOutExpo',
});

textAction.play();
