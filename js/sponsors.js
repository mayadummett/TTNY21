// var close = document.getElementsByClassName("close")[0];

// Balsamiq
var closeBalsamiq = document.getElementsByClassName("closeBalsamiq")[0];
var balsamiq = document.getElementById("balsamiq");
var balsamiqModal = document.getElementById("balsamiq-descript");
balsamiq.onclick = function() {
	balsamiqModal.style.display = "block";
}
closeBalsamiq.onclick = function() {
	balsamiqModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == balsamiqModal) {
    balsamiqModal.style.display = "none";
  }
}

// Capital One
var closeCapitalOne = document.getElementsByClassName("closeCapitalOne")[0];
var CapitalOne = document.getElementById("CapitalOne");
var CapitalOneModal = document.getElementById("CapitalOne-descript");
CapitalOne.onclick = function() {
	CapitalOneModal.style.display = "block";
}
closeCapitalOne.onclick = function() {
	CapitalOneModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == CapitalOneModal) {
    CapitalOneModal.style.display = "none";
  }
}

// Microsoft
var closeMicrosoft = document.getElementsByClassName("closeMicrosoft")[0];
var Microsoft = document.getElementById("Microsoft");
var MicrosoftModal = document.getElementById("Microsoft-descript");
Microsoft.onclick = function() {
	MicrosoftModal.style.display = "block";
}
closeMicrosoft.onclick = function() {
	MicrosoftModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == MicrosoftModal) {
    MicrosoftModal.style.display = "none";
  }
}