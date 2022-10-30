let footerHeader = document.getElementById('.footer_date_id');
footer_date_id.innerText += ` ${new Date().getFullYear()}`;

let placeForProperty = document.getElementById('property_place_id');

let allProperties = [];


async function fetchPropertiesData(){
	let propRent = new Api();
	propRent = await propRent.fetchPropertiesForRent();
	
	
	displayAllProperties(propRent)
	console.log(propRent);
}
 

const displayAllProperties = (data) => {
	let properties = data?.map(item => {
		template_property = template_cards_id.innerHTML;

		template_property = template_property.replaceAll('${id}', item.listing_id);
		template_property = template_property.replaceAll('${city}', item.address.city);
		template_property = template_property.replaceAll('${line}', item.address.line); 
		template_property = template_property.replaceAll('${img}', item.photos['0'].href);
		template_property = template_property.replaceAll('${imgOne}', item.photos['1']?.href);
		template_property = template_property.replaceAll('${imgTwo}', item.photos['2']?.href);
		template_property = template_property.replaceAll('${imgThree}', item.photos['3']?.href);
		template_property = template_property.replaceAll('${imgFour}', item.photos['0'].href);  
		template_property = template_property.replaceAll('${purpose}', changePurpose(item.prop_status));
		template_property = template_property.replaceAll('${state}', item.listing_status);
		template_property = template_property.replaceAll('${type}', item.prop_type); 
		template_property = template_property.replaceAll('${price}', item.community?.price_max);  

		return template_property;
	}).join('');

	placeForProperty.innerHTML = properties;
} 

const changePurpose = (purpose) => {
	if (purpose === 'for_rent') {
		purpose = 'for rent'
	}

	return purpose;
}

const replaceImg = (img) => {
	let thisSrc  = img.getAttribute('src');
	let parentImg = img.closest('.card');
	let imgSrc = parentImg.querySelector('.bac-img');

	imgSrc.src = thisSrc;
}


fetchPropertiesData();