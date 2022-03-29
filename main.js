/* to make the hamburger display the drop down when clicked*/

//icon.addEventListener('click', () => menu.classList.toggle('show'));

/* code for changing hamburger to x once clicked

function myFunction() {
    var x = document.getElementById("myTopnav");
    var i = document.getElementById("ic")
    
    if (x.className === "topnav") {
        x.className += " responsive";
        i.classList.remove("fa-bars")
        i.classList.add("fa-times")

    } else {
      x.className = "topnav";
      i.classList.remove("fa-times")
    i.classList.add("fa-bars")
    }
  } 
  */

document.getElementById("icon").onclick = function () {
    document.getElementById("menu").classList.toggle("show")
    document.getElementById("icon").classList.toggle("fa-times")
}
