let footerHeader = document.getElementById('.footer_date_id');
footer_date_id.innerText += ` ${new Date().getFullYear()}`;





async function fetchPropertiesData(){
	let propertiesForSale = new Api();
	propertiesForSale = await propertiesForSale.fetchPropertiesForSale();
	
	let propertiesForRent = new Api();
	propertiesForRent = await propertiesForRent.fetchPropertiesForRent();
	
	let allProperties = [ ...propertiesForRent, ...propertiesForSale ];
	console.log(allProperties);
	
	
}





fetchPropertiesData();