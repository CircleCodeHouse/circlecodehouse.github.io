$(document).ready(function() {
    var about = document.getElementById('about-us');
    var proc = document.getElementById('process');
    var who = document.getElementById('who-we-are');
    about.addEventListener('mouseover', addAnim);
    proc.addEventListener('mouseover', addAnim);
    who.addEventListener('mouseover', addAnim);
    console.log("test");
    function addAnim() {
      var text = document.getElementsByClassName('timeline-text');
      for(let i = 0; i<text.length; i++){
        text[i].classList.remove('js-loading');
      }
      about.removeEventListener('mouseover', addAnim);
      proc.removeEventListener('mouseover', addAnim);
      who.removeEventListener('mouseover', addAnim);
    };
    // listen to mouseover for the container
    for(let i = 0; i< 100; i++){ 
      var c = document.getElementById("myCanvas");
      let l = document.createElement('canvas');
      var ctx = l.getContext("2d");
      ctx.beginPath();
      ctx.arc(95,50,40,0,2*Math.PI);
      ctx.stroke();
      c.appendChild(l);
    };
});