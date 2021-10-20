let profile_div = document.querySelector('#profile_div');
let span = document.querySelector('#hidden');
let arrow = document.querySelector('#arrow');
let BtnPrev = document.querySelector('#prev');
let BtnNext = document.querySelector('#next');
let sec1 = document.querySelector('#content-1');
let sec2 = document.querySelector('#content-2');
let sec3 = document.querySelector('#content-3');
let sec4 = document.querySelector('#content-4');
let sec5 = document.querySelector('#content-5');
let p1 = document.querySelector('#p1');
let p2 = document.querySelector('#p2');
let p3 = document.querySelector('#p3');
let p4 = document.querySelector('#p4');
let p5 = document.querySelector('#p5');
let line1 = document.querySelector('#line-1');
let line2 = document.querySelector('#line-2');
let line3 = document.querySelector('#line-3');
let line4 = document.querySelector('#line-4');
let check = document.querySelector('#bx');

profile_div.addEventListener('click', () => {
  if(span.style.display == 'block'){
    span.style.display = 'none';
  }else{
    span.style.display = 'block';
  }
  if(arrow.style.transform == 'rotate(180deg)'){
    arrow.style.transform = 'rotate(0deg)';
  }else{
    arrow.style.transform = 'rotate(180deg)';
  }
});

BtnNext.addEventListener('click', () => {
  if(p1.classList == "active-only" || p1.classList == "active active-only"){
    p1.classList.remove("active-only");
    p1.classList.add("active");
    p2.classList.add("active-only");
    sec1.style.display = 'none';
    sec2.style.display = 'block';
    line1.classList.add('active');
  }else if(p2.classList == "active-only" || p2.classList == "active active-only"){
    p2.classList.add("active");
    p2.classList.remove("active-only");
    p3.classList.add("active-only");
    sec2.style.display = 'none';
    sec3.style.display = 'block';
    line2.classList.add('active');
  }else if(p3.classList == "active-only" || p3.classList == "active active-only"){
    p3.classList.add("active");
    p3.classList.remove("active-only");
    p4.classList.add("active-only");
    sec3.style.display = 'none';
    sec4.style.display = 'block';
    line3.classList.add('active-only');
  }else if(p4.classList == "active-only" || p4.classList == "active active-only"){
    p4.classList.add("active");
    p4.classList.remove("active-only");
    p5.classList.add("active-only");
    sec4.style.display = 'none';
    sec5.style.display = 'block';
    line4.classList.add('active');
  };
});


BtnPrev.addEventListener('click', () => {
  if(p5.classList == "active-only"){
    p5.classList.remove("active");
    p5.classList.remove("active-only");
    p4.classList.add("active-only");
    line4.classList.remove('active');
    sec4.style.display = 'block';
    sec5.style.display = 'none'
  }else if(p4.classList == "active active-only" || p4.classList == "active-only"){
    p4.classList.remove("active");
    p4.classList.remove("active-only");
    p3.classList.add("active-only");
    line3.classList.remove('active');
    sec3.style.display = 'block';
    sec4.style.display = 'none'
  }else if(p3.classList == "active active-only" || p3.classList == "active-only"){
    p3.classList.remove("active");
    p3.classList.remove("active-only");
    p2.classList.add("active-only");
    line2.classList.remove('active');
    sec2.style.display = 'block';
    sec3.style.display = 'none'
  }else if(p2.classList == "active active-only" || p2.classList == "active-only"){
    p2.classList.remove("active");
    p2.classList.remove("active-only");
    p1.classList.add("active-only");
    line1.classList.remove('active');
    sec1.style.display = 'block';
    sec2.style.display = 'none'
  }

});

check.addEventListener('click', () => {
  if(check.classList == "bx bx-circle"){
    check.classList.add("bxs-check-circle");
    check.classList.remove("bx-circle");
  }else{
    check.classList.add("bx-circle");
    check.classList.remove("bxs-check-circle");
  }
});