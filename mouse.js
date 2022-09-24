/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*=-=-=-=-=-=-=-=-=Efeitos de Scroll=-=-=-=-=-=-=-=-=-=-=-=-=- */
/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- */

/* ----------------TELEPORT TO ----------------*/
/*
window.addEventListener("DOMContentLoaded", () => {
  const a = document.querySelectorAll('a');
  let idx = 0;
  let delay = false;
  const goto = e => {
    e.preventDefault();
    if (delay) return;
    delay = true;
    setTimeout(function() {
      delay = false
    }, 200); // debounce

    const up = e.deltaY < 0;

    if (up) {
      idx--;
      if (idx < 0) idx = 0;
    } else {
      idx++;
      if (idx >= a.length) idx = a.length - 1;
    }
    a[idx].scrollIntoView();
  };


  document.addEventListener('wheel', goto);
});

*/
/* --------------------SCROLL TO------------------------------------ */
 

(function() {
    var delay = false;
  
    $(document).on('mousewheel DOMMouseScroll', function(event) {
      event.preventDefault();
      if(delay) return;
  
      delay = true;
      setTimeout(function(){delay = false},200)
  
      var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;
  
      var a= document.getElementsByTagName('a');
      if(wd < 0) {
        for(var i = 0 ; i < a.length ; i++) {
          var t = a[i].getClientRects()[0].top;
          if(t >= 40) break;
        }
      }
      else {
        for(var i = a.length-1 ; i >= 0 ; i--) {
          var t = a[i].getClientRects()[0].top;
          if(t < -20) break;
        }
      }
      
      if(i >= 0 && i < a.length) {
        $('html,body').animate({
          scrollTop: a[i].offsetTop
        });
      }
    });
  })();
  console.clear();
