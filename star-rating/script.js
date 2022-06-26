/*
 * Creates star rating functionality
 * @param el DOM Element
 * @param count Number of stars
 * @param callback Returns selected star count to callback
 */
let rating = 0;

function Star(el, count, callback) {
	const wrapperElement = document.querySelector(el);
	for(let i = 0; i < count ; i++){
		const starElement = document.createElement('i');
		starElement.className ='fa fa-star-o';
		starElement.setAttribute('value',i + 1);
		starElement.addEventListener('click', (event) => {
			callback(event.target.getAttribute('value'));
		});
		starElement.addEventListener('mouseover', (event) => {
			rating = event.target.getAttribute('value');
			wrapperElement.childNodes.forEach(child => {
				child.className ='fa fa-star' + ((rating > 0) ? '' : '-o');
				rating--;
			})
		});
		wrapperElement.appendChild(starElement);
	}
}