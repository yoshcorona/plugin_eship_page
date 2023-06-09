
var header = document.querySelector('.header__component');

window.onscroll = function (){
    var top = window.scrollY;
    if(top >= 100){
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}


document.getElementById("hide").onclick = function() {
  document.getElementById("responsive__menu").style.display = "none";
  document.getElementById("change__header").style.marginLeft = "0px";
}

document.getElementById("show").onclick = function() {
  document.getElementById("responsive__menu").style.display = "block";
  document.getElementById("change__header").style.marginLeft = "-250px";

}



function openSection(evt, pageName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();

var btn = document.getElementsByClassName('btn');
var slide = document.getElementById('slide');

btn[0].onclick = function(){
    slide.style.transform = "translateX(0%)"
    for(i=0; i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

btn[1].onclick = function(){
    slide.style.transform = "translateX(-25%)"
    for(i=0; i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

btn[2].onclick = function(){
    slide.style.transform = "translateX(-50%)"
    for(i=0; i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}

btn[3].onclick = function(){
    slide.style.transform = "translateX(-75%)"
    for(i=0; i<4;i++){
        btn[i].classList.remove("active")
    }
    this.classList.add("active")
}