

// const nav = document.querySelector('nav');
const body = document.querySelector('body');
const ul = document.querySelector('ul');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');



openMenu.onclick = function(){
  ul.classList.add('active');
  openMenu.classList.add('hide');
  body.classList.add('disabledScroll');
}

closeMenu.onclick = function(){
  ul.classList.remove('active');
  openMenu.classList.remove('hide');
  body.classList.remove('disabledScroll');
}

// window.onscroll = function(){
//   this.scrollY > 20 ?
//   nav.classList.add('sticky'):
//   nav.classList.add('sticky');
// }



//------------------------------------proggress-----------------------------------
$('.skillPer').each(function(){
    var $this = $(this);
    var per = $this.attr('per');

    $this.css("width", per+'%');

    $({animatedValue: 0}).animate({animatedValue: per},{
        duration: 1000,
        step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
    })
})
//---------------------------------service counter----------------------------------
const counters = document.querySelectorAll (".counter");

counters.forEach((counter)=> {
  counter.innerHTML = 0;
  const updateCounter = ()=> {
    const targetCount = +counter.getAttribute("data-target");
    const startCount = Number(counter.innerHTML);
    const incr = targetCount / 100;
    
    if(startCount < targetCount) {
      counter.innerHTML = `${Math.round(startCount + incr)}`;
      setTimeout(updateCounter, 59);
    } else {
      counter.innerHTML = targetCount;
    };
  };
  updateCounter();
});

//--------------------------------animated header type--------------------------------

$(function() {
  $('.animate-clip').animatedHeadline({
      animationType: 'clip'
  });
})

//-------------------
$('.animate-loading-bar').animatedHeadline({
  animationType: 'loading-bar'
});



