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

// Boston University
var closeBU = document.getElementsByClassName("closeBU")[0];
var BU = document.getElementById("BU");
var BUModal = document.getElementById("BU-descript");
BU.onclick = function() {
	BUModal.style.display = "block";
}
closeBU.onclick = function() {
	BUModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == BUModal) {
    BUModal.style.display = "none";
  }
}

// Spark
var closeSpark = document.getElementsByClassName("closeSpark")[0];
var Spark = document.getElementById("Spark");
var SparkModal = document.getElementById("Spark-descript");
Spark.onclick = function() {
	SparkModal.style.display = "block";
}
closeSpark.onclick = function() {
	SparkModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == SparkModal) {
    SparkModal.style.display = "none";
  }
}

// Travelers
var closeTravelers = document.getElementsByClassName("closeTravelers")[0];
var Travelers = document.getElementById("Travelers");
var TravelersModal = document.getElementById("Travelers-descript");
Travelers.onclick = function() {
	TravelersModal.style.display = "block";
}
closeTravelers.onclick = function() {
	TravelersModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == TravelersModal) {
    TravelersModal.style.display = "none";
  }
}

// Robinhood
var closeRobinhood = document.getElementsByClassName("closeRobinhood")[0];
var Robinhood = document.getElementById("Robinhood");
var RobinhoodModal = document.getElementById("Robinhood-descript");
Robinhood.onclick = function() {
	RobinhoodModal.style.display = "block";
}
closeRobinhood.onclick = function() {
	RobinhoodModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == RobinhoodModal) {
    RobinhoodModal.style.display = "none";
  }
}