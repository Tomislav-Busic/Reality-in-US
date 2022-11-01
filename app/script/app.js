let footerHeader = document.getElementById('.footer_date_id');
footer_date_id.innerText += ` ${new Date().getFullYear()}`;

let placeForProperty = document.getElementById('properties_place_id');

let allProperties = [];


async function getPropertiesData(){
	let propRent = new Api();
	propRent = await propRent.fetchPropertiesForRent();
	
	
	displayAllProperties(propRent);
	console.log(propRent);
}
 

const displayAllProperties = (data) => {
	let properties = data?.map(item => {
		template_property = template_cards_id.innerHTML;

		template_property = template_property.replaceAll('${id}', item.property_id);
		template_property = template_property.replaceAll('${city}', item.address_new.city);
		template_property = template_property.replaceAll('${line}', item.address_new.postal_code); 
		template_property = template_property.replaceAll('${img}', item?.photo);
		template_property = template_property.replaceAll('${imgOne}', item?.photo);
		template_property = template_property.replaceAll('${imgTwo}', item?.photo);
		template_property = template_property.replaceAll('${imgThree}', item?.photo);
		template_property = template_property.replaceAll('${imgFour}', item?.photo);  
		template_property = template_property.replaceAll('${purpose}', changePurpose(item.prop_status));
		template_property = template_property.replaceAll('${type}', changePurpose(item.prop_type)); 
		template_property = template_property.replaceAll('${price}', item.price);  

		return template_property;
	}).join('');

	placeForProperty.innerHTML = properties;
} 

const changePurpose = (purpose) => {
	switch (purpose) {
		case 'for_rent':
			purpose = 'for rent';
			break;
		case 'single_family':
			purpose = 'single <br> family';
			break;
	}

	return purpose;
}

const replaceImg = (img) => {
	let thisSrc  = img.getAttribute('src');
	let parentImg = img.closest('.card');
	let imgSrc = parentImg.querySelector('.bac-img');

	imgSrc.src = thisSrc;
}

const openDetails = (btn) => {
	let thisParent = btn.closest('.card');
	let thisId = thisParent.getAttribute('id');
	
	localStorage.setItem('thisId', thisId);

	window.location.href = './app/property.html';
}


getPropertiesData(); 

