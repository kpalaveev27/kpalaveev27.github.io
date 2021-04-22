//Re-purposed from https://codepen.io/shshaw/pen/vKzoLL
var clock = new Countdown(99999);

function setup() {} //needed to start p5

function keyPressed() {
  // print("key: [" + key + "]");
  if (key === '1') {
    clock.changeClock(1);
  }

  if (key === '2') {
    clock.changeClock(2);
  }

  if (key === '8') {
    clock.changeClock(99998);
  }

  if (key === '9') {
    clock.changeClock(99999);
  }
}

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