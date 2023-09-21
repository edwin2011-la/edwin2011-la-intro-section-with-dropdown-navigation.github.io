const menu = document.querySelector(".menu-icon");

menu.addEventListener("click", function (ev) {
  const sideBar = document.querySelector(".res-nav");
  sideBar.style.display = "block";
  menu.style.display = "none";
  const closeMenu = document.querySelector(".close-icon");
  closeMenu.style.display = "block";
  let style = document.createElement('style');
  document.head.appendChild(style); 
  style.sheet.insertRule('.cover{ z-index: 3; position: absolute; top: 0;  left: 0; width: 100%; height: 135vh;  background-color: rgb( 0, 0, 0, 0.6);')
});

const closeMenu = document.querySelector(".close-icon");

closeMenu.addEventListener("click" ,function(ev){
  const sideBar = document.querySelector(".res-nav");
  sideBar.style.display = "none";
  menu.style.display = "block";
  const closeMenu = document.querySelector(".close-icon");
  closeMenu.style.display = "none";
  let style = document.createElement('style');
  document.head.appendChild(style); 
  style.sheet.insertRule('.cover{ z-index: -2;  background-color: rgb( 255, 255, 255); position: absolute; top: 0;  left: 0; width: 100%; height: 135vh;')
});