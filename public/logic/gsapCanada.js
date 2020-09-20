var rule = CSSRulePlugin.getRule("span:after");

var tl = gsap.timeline({default: {duration: 1}})

tl.from("#main-content", {y: -50, stagger: .6, opacity: 0})
tl.from(".subtitleText", {y: -50, stagger: .6, opacity: 0})
tl.from(".titleText", {y:-150, stagger: .6, opacity:0}, "-=0.5")
tl.from("#left-text", {x:-250, stagger: .6, opacity:0}, "-=0.5")
tl.from("#NTBTS-Btn", {x:-250, stagger: .6, opacity:0}, "-=0.5")
tl.from("#right-text", {x:250, stagger: .6, opacity:0}, "-=0.5")


// Nirvanna The Band The Show Modal
//
// Get the modal
var modal = document.getElementById("NTBTS-Modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function NTBTS() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// The Bob And Doug Mckenie Show
//
// Get the modal
var BADMCmodal = document.getElementById("BADMC-Modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks on the button, open the modal
function BADMC() {
  BADMCmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  BADMCmodal.style.display = "none";
}

// Corner Gas
//
// Get the modal
var CGmodal = document.getElementById("CG-Modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[2];

// When the user clicks on the button, open the modal
function CG() {
  CGmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  CGmodal.style.display = "none";
}

// Kims Convenience
//
// Get the modal
var KCmodal = document.getElementById("KC-Modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
function KC() {
  KCmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  KCmodal.style.display = "none";
}

// Kenny VS Spenny
//
// Get the modal
var KVSmodal = document.getElementById("KVS-Modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[3];

// When the user clicks on the button, open the modal
function KVS() {
  KVSmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  KVSmodal.style.display = "none";
}