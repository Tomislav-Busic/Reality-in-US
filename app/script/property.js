let placeForTemplate = document.getElementById('place_property_id'); 
let pictures = undefined; 
let imgNum = 0;




async function getProperty() {
    let getId = localStorage.getItem('thisId');

    let getProperty = new Api();
    let thisId = getProperty.prop_id;
    thisId = getId;
    getProperty = await getProperty.getPropertyById(thisId);
    console.log(getProperty);
    displayProperty(getProperty);
}

const displayProperty = (item) => {
    template_property = property_id.innerHTML;

    template_property = template_property.replaceAll('${photo}', item.photos?.['0'].href ? item.photos?.['0'].href : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGoeZg06hhqGsjJ-DrxjgEmU5o7Jua2vB9Q&usqp=CAU');
    template_property = template_property.replaceAll('${description}', item?.description);
    template_property = template_property.replaceAll('${lat}', item.address.lat);
    template_property = template_property.replaceAll('${long}', item.address.long);

    placeForTemplate.innerHTML = template_property;

    
    //Show all images
    let allImages = item.photos;

    allImages.forEach(img => {
        images_place_id.innerHTML += `<img src="${img.href}" />`;
    });

}

const moveRight = () => {
    hidePictures();

    imgNum++;

    if (imgNum === pictures.length) {
        imgNum = 0;
    }

    pictures[imgNum].style.display = 'block';
}

const moveLeft = () => {
    hidePictures();

    imgNum--;

    if (imgNum === -1) {
        imgNum = pictures.length -1;
    }

    pictures[imgNum].style.display = 'block'; 
}

const hidePictures = () => {
    pictures.forEach(pic => {
        pic.style.display = 'none';
    });
} 



getProperty();