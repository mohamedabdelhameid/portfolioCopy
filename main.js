let hide = document.getElementById('Hide');
let hider = document.getElementById('iBars');
let light=document.getElementById('modeLight');
let dark=document.getElementById('modeDark');
let Body=document.getElementById('Boody');
let navbar=document.getElementById('NavBar');
let immg=document.getElementById('img2projecT');
let immg12=document.getElementById('imgIndiv22imagge');


function hiddden(){
  if(hide.innerHTML === ''){
    hide.innerHTML = `
    <a href="#Home" onclick="hidder()">Home</a>
    <a href="#About" onclick="hidder()">About</a>
    <a href="#PROjects" onclick="hidder()">Projects</a>
    <a href="#experIence" onclick="hidder()">Experiences</a>
    <a href="#conTact" onclick="hidder()">Contact</a>
    `
    hider.setAttribute('class','fa-solid fa-xmark')
  }
  else{
    hide.innerHTML = '';
    hider.setAttribute('class','fa-solid fa-bars-staggered')
  }
}

function hidder(){
  hide.innerHTML = '';
  hider.setAttribute('class','fa-solid fa-bars-staggered')
}

light.setAttribute("class","none");
function lighting(){
  light.setAttribute("class","fa-solid fa-sun text-light mode");
  // light.classList.add("play")
  Body.setAttribute("class","bodyDark");
  // light.setAttribute("class","none")
  dark.setAttribute("class","none");
  navbar.setAttribute("class","navBar bg-dark");
  immg.setAttribute("src","image/٢٠٢٤٠٤١١٢٢٤٣٤٩_IMG_79811.JPG");
  immg12.setAttribute("src","image/OIP1dark.jpeg")
}

function darking(){
  dark.setAttribute("class","fa-solid fa-moon text-dark mode");
  // light.classList.add("play")
  Body.setAttribute("class","");
  // light.setAttribute("class","none")
  light.setAttribute("class","none");
  navbar.setAttribute("class","navBar bg-light");
  immg.setAttribute("src","image/myPicture.jpg");
  immg12.setAttribute("src","image/R1light.jpg")
}

