


/*-------------About Section-------------*/

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}


/*---------------Click Function-------------------*/

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right= "0";
}

function closemenu(){
    sidemenu.style.right= "-200px";
}

/*-----------------Experience Slide----------------*/

var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;

upArrow.onclick = function()
{
    if(x > "-600")
    {
        x= x-300;
        slide.style.top= x +"px";
    }


    
}

downArrow.onclick = function()
{
    if(x < 0)
    {
        x = x + 300;
        slide.style.top = x +"px";
    }
}