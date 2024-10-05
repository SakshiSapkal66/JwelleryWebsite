// active navbar

// let nav = document.querySelector(".navigation.wrap");
// window.onscroll = function (){
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add("scroll-on");
//     }
//     else{
//         nav.classList.remove("scroll-on");  
//     }
// }
//nav hide

//let navbar = document.querySelectorAll(".nav-link");
//let navCollapse = document.querySelector(".navbar-collapse.collapse");

//navbar.forEach(function(a) {
    //a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
   // });
//});

document.addEventListener("DOMContentLoaded", function() {
    let navbar = document.querySelectorAll(".nav-link");
    let navCollapse = document.querySelector(".navbar-collapse.collapse");

    // Ensure navCollapse is defined before adding event listeners
    if (navCollapse) {
        navbar.forEach(function(a) {
            a.addEventListener("click", function() {
                navCollapse.classList.remove("show");
            });
        });
    } else {
        console.error("Navbar collapse element not found");
    }

    // Example of using navCollapse during scroll
    window.onscroll = function() {
        if (navCollapse) {
            // Your scroll logic here
            // Example: navCollapse.classList.add('new-class'); // Modify as needed
        } else {
            console.error("Navbar collapse element not found during scroll");
        }
    };
});
