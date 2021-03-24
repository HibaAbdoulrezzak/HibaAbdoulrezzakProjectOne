const menuContainer = document.body.querySelector(".topBar");

const button = document.body.querySelector(".hamburgerMenu");

button.addEventListener("click", menu);

function menu() {
	menuContainer.classList.contains("hidden")
		? menuContainer.classList.remove("hidden")
		: menuContainer.classList.add("hidden");
}

var modal = document.getElementById("buttonPopUp");

var btn = document.getElementById("myButton");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
	modal.style.display = "block";
};

span.onclick = function () {
	modal.style.display = "none";
};

window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};


// Sources:
// https://www.w3schools.com/howto/howto_css_modals.asp (I copied this code and used the lesson to learn how to build a modal)
//https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

