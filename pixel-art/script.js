let selectedColor = "#000000";
function PixelArt(el, rows, cols) {
	const originElement = document.querySelector(el);
	for(let j = 0; j < rows; j++) {
		const rowElement = document.createElement("div");
		rowElement.classList.add("row");
		for(let i = 0; i < cols; i++) {
			const canvasBox = document.createElement("div");
			canvasBox.classList.add("box");
			canvasBox.addEventListener("click", () => {
				canvasBox.style.backgroundColor = selectedColor;
			});
			rowElement.appendChild(canvasBox);
		}
		originElement.appendChild(rowElement);
	}
	const colorPickerElement = document.createElement("div");
	colorPickerElement.classList.add("row");
	for(let i = 0; i < cols; i++) {
		const colorPickerBox = document.createElement("div");
		colorPickerBox.classList.add("box");
		colorPickerBox.addEventListener("click", () => {
			selectedColor = colorPickerBox.style.backgroundColor;
		});
		colorPickerBox.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
		colorPickerElement.appendChild(colorPickerBox);
	}
	originElement.appendChild(colorPickerElement);
}