// Navbar JS
const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLinks = document.getElementsByClassName("navbar-links")[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle("active")
})

// Click Arrows
// $(document).ready(function(){
//     $(".clickable").on("click",function() {
//       val = $(this).data("val");  
//       var div= $("#"+val);
//       div.toggle("slow").siblings().hide("slow");
//   });
// });   

//Example
// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").slideToggle();
//     });
//   });

//Click Arrows
$(document).ready(function(){
    $(".arrow").click(function(){
        $(".resources").slideToggle();
    });
});