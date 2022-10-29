let footerHeader = document.getElementById('.footer_date_id');
footer_date_id.innerText += ` ${new Date().getFullYear()}`;

let placeForProperty = document.getElementById('property_place_id');

let allProperties = [];


async function fetchPropertiesData(){
	let properties = new Api();
	properties = await properties.fetchProperties();
	
	
	displayAllProperties(properties);
	console.log(properties);
}

const displayAllProperties = (data) => {
	let propertys = data?.map(item => {
		template_property = template_cards_id.innerHTML;

		template_property = template_property.replaceAll('${name}', item.contactName);
		template_property = template_property.replaceAll('${img}', item.coverPhoto.url);
		template_property = template_property.replaceAll('${purpose}', item.purpose);
		template_property = template_property.replaceAll('${state}', item.state);
		template_property = template_property.replaceAll('${rooms}', item.rooms);
		template_property = template_property.replaceAll('${price}', item.price);

		return template_property;
	}).join('');

	placeForProperty.innerHTML = propertys;
} 



fetchPropertiesData();