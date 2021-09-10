/*==================== LETRAS ANIMEJS  ==================== */
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000
  });

 

  /*==================== MOUSE OVER IMGS ==================== */

  //first img
let test = document.getElementById("cardone");

// This handler will be executed only once when the cursor
// moves over the unordered list
test.addEventListener("mouseenter", function( event ) {
  // highlight the mouseenter target
  event.target.src = "assets/img/cursos/cardd2.png";
  event.target.style.scale = "1.2";

  
}, false);

test.addEventListener("mouseout", function( event ) {
  // highlight the mouseout target
  event.target.src = "assets/img/cursos/cardd1.png";
  event.target.style.scale = "1";})

  //second img

  let test2 = document.getElementById("cardtwo");

  // This handler will be executed only once when the cursor
  // moves over the unordered list
  test2.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.src = "assets/img/cursos/yogacard.jpeg";
    event.target.style.scale = "1.2";
  
    
  }, false);
  
  test2.addEventListener("mouseout", function( event ) {
    // highlight the mouseout target
    event.target.src = "assets/img/cursos/yogacard1.jpeg";
    event.target.style.scale = "1";})

//third img
let test3 = document.getElementById("cardthree");

  // This handler will be executed only once when the cursor
  // moves over the unordered list
  test3.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.src = "assets/img/cursos/reiki2.jpg";
    event.target.style.scale = "1.2";
  
    
  }, false);
  
  test3.addEventListener("mouseout", function( event ) {
    // highlight the mouseout target
    event.target.src = "assets/img/cursos/reiki1.jpg";
    event.target.style.scale = "1";})
  

//fourth img
let test4 = document.getElementById("cardfour");

  // This handler will be executed only once when the cursor
  // moves over the unordered list
  test4.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.src = "assets/img/cursos/munay-ki1.jpg";
    event.target.style.scale = "1.1";
  
    
  }, false);
  
  test4.addEventListener("mouseout", function( event ) {
    // highlight the mouseout target
    event.target.src = "assets/img/cursos/munay-ki.jpeg";
    event.target.style.scale = "1";})
  