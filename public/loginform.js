function show() {
  
    document.querySelector('.overlay').classList.toggle('showoverlay');
    document.querySelector('.login').classList.toggle('showlogin');
  }
  let btnlogin = document.querySelector('#login');
  let btncross = document.querySelector('.cross');
  let btnoverlay = document.querySelector('.overlay');
  btnlogin.addEventListener("click", show);
  btncross.addEventListener("click", show);
  btnoverlay.addEventListener("click", show);

  function darkmode() {
    document.body.classList.toggle('darkmode');
    document.querySelector(".navbar").classList.toggle("darkmode");
    // document.querySelector(".logo").classList.toggle("darkmode");;
    document.querySelector(".toggle").classList.toggle("darktoggle");
    document.querySelector(".mode").classList.toggle("darkmode");
  }

  let darkbtn=document.querySelector(".toggle");
  darkbtn.addEventListener("click", darkmode);

  
  //    // make sure HTML is defined for Observable foo.
  //   // selecting the :root theme
  // const root_theme = document.querySelector(':root');
  // // seleting the button which will trigger the event
  // const root_btn = document.querySelector('.check');
  // // the event listener to change the text color upon 'click'
  // root_btn.addEventListener('click', () => {
  //     // changing the color from #0b32e7 to #f44336
  //     root_theme.style.setProperty('--secondary-color','blue'); 
  // });
  