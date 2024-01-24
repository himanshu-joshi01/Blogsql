function darkmode() {
  document.body.classList.toggle('darkmode');
  document.querySelector(".navbar").classList.toggle("darkmode");
  // document.querySelector(".logo").classList.toggle("darkmode");;
  document.querySelector(".toggle").classList.toggle("darktoggle");
  document.querySelector(".mode").classList.toggle("darkmode");
}
let darkbtn=document.querySelector(".toggle");
darkbtn.addEventListener("click", darkmode);