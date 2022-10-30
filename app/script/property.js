let placeForTemplate = document.getElementById('place_property_id');

async function getProperty() {
    let getId = localStorage.getItem('thisId');

    let getProperty = new Api();
    getProperty.prop_id = getId;
    getProperty = await getProperty.getPropertyById(getId);
    console.log(getProperty);
    displayProperty(getProperty);
}

const displayProperty = (item) => {
    template_property = property_id.innerHTML;

    template_property = template_property.replaceAll('${description}', item.description);

    placeForTemplate.innerHTML = template_property;

    
    //Show all images
    let allImages = item.photos;

    allImages.forEach(img => {
        images_place_id.innerHTML += `<img src="${img.href}" />`;
    });
}

getProperty();