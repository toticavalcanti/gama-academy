function createNode(element) {
	return document.createElement(element);
}

function append(parent, el) {
	return parent.appendChild(el);
}

const ul = document.getElementById('properties');
const url = 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72';
fetch(url)
	.then((resp) => resp.json())
	.then(function (data) {
		let properties = data;
		return properties.map(function (propertie) {

			let addEventListeners = () => {
				prevButton.addEventListener('click', prevPage);
				nextButton.addEventListener('click', nextPage);   
			}

			let li    = createNode('li'),
				img   = createNode('img'),
				h3_01 = createNode('h3');
			    h3_02 = createNode('h3');
			    h4    = createNode('h4');

            img.src = propertie.photo;
            $("img").addClass("card"); 
            h3_01.innerHTML = `${propertie.name}` 
            h3_02.innerHTML = `${propertie.property_type}`;
            $("h3").addClass("card-title"); 
            $("h3").addClass("card-text");
            
			h4.innerHTML = `Valor: $${propertie.price}.00`
			append(li, img);
			append(li, h3_01);
			append(li, h3_02);
			append(li, h4);
			append(ul, li);
		})
	})
	.catch(function (error) {
		console.log(JSON.stringify(error));
	});