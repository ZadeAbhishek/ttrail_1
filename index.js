window.onload = function() {
var draggable = document.getElementById('draggable');
draggable.addEventListener('touchmove', function(event) {
  var touch = event.targetTouches[0];
  //According to me the above [0] is only for one finger at one time.
  console.log("Detected");  
  // Place element where the finger is
  draggable.style.left = touch.pageX-25 + 'px';
  draggable.style.top = touch.pageY-25 + 'px';
  console.log(touch.pageX-25);
  console.log(touch.pageY-25);
  event.preventDefault();
}, false);
}