//Re-purposed from https://codepen.io/shshaw/pen/vKzoLL
var current_countdown_value = 99999;
var clock = new Countdown(current_countdown_value);
window.addEventListener('keydown', function (e) { key_down(e); });

function setup() {} //needed to start p5

// needed for disabling auto-scroll when pressing space
function key_down(e) { 
  var e = window.event||e; // Handle browser compatibility
  var keyID = e.keyCode;
  //space pressed
  if (keyID == 32) {
    current_countdown_value -= 1;
    clock.changeClock(current_countdown_value);
      e.preventDefault(); // Prevent the default action
  }

  offset = 48;

  if (keyID === 1 + offset) {
    current_countdown_value = 1;
    clock.changeClock(current_countdown_value);
  }

  if (keyID === 2 + offset) {
    current_countdown_value = 2;
    clock.changeClock(current_countdown_value);
  }

  if (keyID === 8 + offset) {
    current_countdown_value = 99998;
    clock.changeClock(current_countdown_value);
  }

  if (keyID === 9 + offset) {
    current_countdown_value = 99999;
    clock.changeClock(current_countdown_value);
  }

  // if (keyID === ' ') {
  //   current_countdown_value -= 1;
  //   clock.changeClock(current_countdown_value);
  //   e.preventDefault(); // Prevent the default action
  // }
}

// function keyPressed() {
//   // print("key: [" + key + "]");
//   if (key === '1') {
//     current_countdown_value = 1;
//     clock.changeClock(current_countdown_value);
//   }

//   if (key === '2') {
//     current_countdown_value = 2;
//     clock.changeClock(current_countdown_value);
//   }

//   if (key === '8') {
//     current_countdown_value = 99998;
//     clock.changeClock(current_countdown_value);
//   }

//   if (key === '9') {
//     current_countdown_value = 99999;
//     clock.changeClock(current_countdown_value);
//   }

//   if (key === ' ') {
//     current_countdown_value -= 1;
//     clock.changeClock(current_countdown_value);
//     // e.preventDefault(); // Prevent the default action
//   }
// }

function CountdownTracker(value){

  var el = document.createElement('span');

  el.className = 'flip-clock__piece';
  el.innerHTML = '<b class="flip-clock__card card"><b class="card__top"></b><b class="card__bottom"></b><b class="card__back"><b class="card__bottom"></b></b></b>';

  this.el = el;

  var top = el.querySelector('.card__top'),
      bottom = el.querySelector('.card__bottom'),
      back = el.querySelector('.card__back'),
      backBottom = el.querySelector('.card__back .card__bottom');

  this.update = function(val){
    if ( val !== this.currentValue ) {
      
      if ( this.currentValue >= 0 ) {
        back.setAttribute('data-value', this.currentValue);
        bottom.setAttribute('data-value', this.currentValue);
      }
      this.currentValue = val;
      top.innerText = this.currentValue;
      backBottom.setAttribute('data-value', this.currentValue);

      this.el.classList.remove('flip');
      void this.el.offsetWidth;
      this.el.classList.add('flip');
    }
  }
  
  this.update(value);
}

// Calculation adapted from https://www.sitepoint.com/build-javascript-countdown-timer-no-dependencies/

function updateCountdown(countdown_value) {
  return {
    'A': Math.floor(countdown_value/10000%10),
    'B': Math.floor(countdown_value/1000%10),
    'C': Math.floor(countdown_value/100%10),
    'D': Math.floor(countdown_value/10%10),
    'E': Math.floor(countdown_value/1%10)
  };
}

function Countdown(starting_value) {
  this.el = document.createElement('div');
  this.el.className = 'flip-clock';

  var trackers = {},
      t = updateCountdown(starting_value),
      key;

  for ( key in t ){
    if ( key === 'Total' ) { continue; }
    trackers[key] = new CountdownTracker(t[key]);
    this.el.appendChild(trackers[key].el);
  }

  this.changeClock = function changeClock(new_value) {
    
    var t = updateCountdown(new_value);
    if ( t.Total < 0 ) {
      for ( key in trackers ){
        trackers[key].update( 0 );
      }
      return;
    }
    
    for ( key in trackers ){
      trackers[key].update( t[key] );
    }
  }
}

document.body.appendChild(clock.el);