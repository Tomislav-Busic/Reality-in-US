let footerHeader = document.getElementById('.footer_date_id');
footer_date_id.innerText += ` ${new Date().getFullYear()}`;

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

let placeForProperty = document.getElementById('properties_place_id');

let searchByCity = document.getElementById('input_city_id');
let filterAndSortByOptions = document.getElementById('select_option_id');

let allProperties = [];
let propertiesForRent = [];
let propertiesForSale = [];

//Toggle with the menu btn
menuBtn.addEventListener('click', () => {
	if (menu.style.right === '-15rem') {
		menu.style.right = '0';
	} else {
		menu.style.right = '-15rem';
	}
});

//Close the menu when scroll
window.addEventListener('scroll', () => {
	menu.style.right = '-15rem';
});


//Get data for the properties form class Api();
async function getPropertiesData(){
	let propRent = new Api();
	propRent = await propRent.fetchPropertiesForRent();
	propertiesForRent = propRent;
	
	let propSale = new Api();
	propSale = await propSale.fetchPropertiesForSale();
	propertiesForSale = propSale;

	allProperties = [ ...propRent, ...propSale ];
	
	displayAllProperties(allProperties);
	console.log(allProperties);
}
 
//Show the data. Replace data in the template then put this template on appropriate place
const displayAllProperties = (data) => {
	let properties = data?.map(item => {
		template_property = template_cards_id.innerHTML;

		template_property = template_property.replaceAll('${id}', item.property_id);
		template_property = template_property.replaceAll('${city}', item.address_new.city);
		template_property = template_property.replaceAll('${line}', item.address_new.postal_code); 
		template_property = template_property.replaceAll('${img}', item?.photo ? item?.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGoeZg06hhqGsjJ-DrxjgEmU5o7Jua2vB9Q&usqp=CAU');
		template_property = template_property.replaceAll('${imgOne}', item?.photo ? item?.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGoeZg06hhqGsjJ-DrxjgEmU5o7Jua2vB9Q&usqp=CAU');
		template_property = template_property.replaceAll('${imgTwo}', item?.photo ? item?.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGoeZg06hhqGsjJ-DrxjgEmU5o7Jua2vB9Q&usqp=CAU');;
		template_property = template_property.replaceAll('${imgThree}', item?.photo ? item?.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGoeZg06hhqGsjJ-DrxjgEmU5o7Jua2vB9Q&usqp=CAU');
		template_property = template_property.replaceAll('${imgFour}', item?.photo ? item?.photo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGoeZg06hhqGsjJ-DrxjgEmU5o7Jua2vB9Q&usqp=CAU');  
		template_property = template_property.replaceAll('${purpose}', changePurpose(item.prop_status));
		template_property = template_property.replaceAll('${type}', changePurpose(item.prop_type)); 
		template_property = template_property.replaceAll('${baths}', item.baths);  
		template_property = template_property.replaceAll('${beds}', item.beds);  
		template_property = template_property.replaceAll('${price}', item.price);  

		return template_property;
	}).join('');

	placeForProperty.innerHTML = properties;
} 

//Change the name then return this name 
const changePurpose = (purpose) => {
	switch (purpose) {
		case 'for_rent':
			purpose = 'for rent';
			break;
		case 'for_sale':
			purpose = 'for sale';
			break;
		case 'single_family':
			purpose = 'single family';
			break;
	}

	return purpose;
}

//Filter the data by the city by name
searchByCity.addEventListener('input', (e) => {
	let value = e.target.value.toLowerCase();

	let filterByCityName = allProperties.filter(city => 
		city.address_new.city.toLowerCase().includes(value));

		displayAllProperties(filterByCityName);
});

/* filterAndSortByOptions.addEventListener('change', (e) => {
	let value = e.target.value;

	switch (value) {
		case 'all':
			displayAllProperties(allProperties);
			break;
		case 'for-rent':
			displayAllProperties(propertiesForRent);
			break;
		case 'for-sale':
			displayAllProperties(propertiesForSale);
			break;
	}
}); */

//Replace the small img with big.
//It's work but this api dont have more images
const replaceImg = (img) => {
	let thisSrc  = img.getAttribute('src');
	let parentImg = img.closest('.card');
	let imgSrc = parentImg.querySelector('.bac-img');

	imgSrc.src = thisSrc;
}

//Takes id form the this card and send it to the localStorage
const openDetails = (btn) => {
	let thisParent = btn.closest('.card');
	let thisId = thisParent.getAttribute('id');
	
	localStorage.setItem('thisId', thisId);

	window.location.href = './app/property.html';
}


getPropertiesData(); 

