//Event listeners for all of the elements that need selecting
const heightQuestion = document.querySelector("#question1");
const weightQuestion = document.querySelector("#question2");
const lifeQuestion = document.querySelector("#question3");
const submitBtn = document.querySelector("#submit-btn");
const resultsArea = document.querySelector("#results");

const apiKey = `f0042504-b451-49fe-a1d7-d83d59145255`;
const url = `https://api.thedogapi.com/v1/breeds?${apiKey}`;

submitBtn.addEventListener("click", function (event) {
	event.preventDefault();
	getDogs();
});

function getDogs() {
	//Removed all images so clean when running again
	while (resultsArea.firstChild) {
		resultsArea.firstChild.remove();
	}

	//Destructure min and max height from value input.
	const [
		minHeightRequirement,
		maxHeightRequirement,
	] = heightQuestion.value.split("-").map((num) => parseInt(num));

	//TODO Add weight requirements like above
	const [
		minWeightRequirement,
		maxWeightRequirement,
	] = weightQuestion.value.split("-").map((num) => parseInt(num));

	//TODO Add life expectancy as above
	// DH CODE - parse to integer

	const [minLifeRequirement, maxLifeRequirement] = lifeQuestion.value
		.split("-")
		.map((num) => parseInt(num));

	//make req to API
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			//Filter method
			const result = data.filter((dog) => {
				//Destructing out the min and max heights of every dog
				const [minHeight, maxHeight] = dog.height.metric
					.split("-")
					.map((num) => parseInt(num));

				const [minWeight, maxWeight] = dog.weight.metric
					.split("-")
					.map((num) => parseInt(num));

				// DH CODE - replace the word years with an empty string. Not sure where this goes in the code though?
				// let lifeSpan = data.life_span.replace('years', '');

				const [minLife, maxLife] = dog.life_span
					.split("-")
					.map((num) => parseInt(num));

				//TODO Add weight requirements like above
				//TODO Add life expectancy as above (Remove the word "Years" from the dog obj

				//Parameters for the filter method, comparing min and max height to the min and max height requirements from the input
				//Add the height and life expectancy as extra conditions, as below, consider accounting for possible missing data (undefined)
				if (
					minHeight >= minHeightRequirement &&
					minWeight >= minWeightRequirement &&
					minLife >= minLifeRequirement &&
					maxHeight <= maxHeightRequirement &&
					maxWeight <= maxWeightRequirement &&
					maxLife <= maxLifeRequirement
				) {
					return dog;
				} else {
					var img = document.getElementById("sadPug");
					img.style.visibility = "visible";
				}
			});

			//Get image from filtered objects and map over it
			result.forEach((dogObj) => {
				//create an img element for each dog obj
				const element = document.createElement("img");
				//set the img src for the img based upon the src provided in the dogObj
				element.setAttribute("src", dogObj.image.url);
				// ADDED BY DH - add breed name
				const name = document.createElement("h2");
				name.textContent = dogObj.name;
				// ADDED BY DH - add descriptive text
				const temperament = document.createElement(`p`);
				temperament.textContent = dogObj.temperament;
				//Append that image element to the results div to display it
				resultsArea.appendChild(element);
				resultsArea.appendChild(name);
				resultsArea.appendChild(temperament);
			});
		});

	//heart

	$("#header-plugin").load(
		"https://vivinantony.github.io/header-plugin/",
		function () {
			$("a.back-to-link").attr(
				"href",
				"http://blog.thelittletechie.com/2015/03/love-heart-animation-using-css3.html#tlt"
			);
		}
	);
}
