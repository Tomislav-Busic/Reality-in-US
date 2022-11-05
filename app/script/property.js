let placeForTemplate = document.getElementById('place_property_id'); 
let pictures = undefined; 
let imgNum = 0;



//Get the id of the product, then send this id in class Api() and return the property with this id 
async function getProperty() {
    let getId = localStorage.getItem('thisId');

    let getProperty = new Api();
    let thisId = getProperty.prop_id;
    thisId = getId;
    getProperty = await getProperty.getPropertyById(thisId);
    console.log(getProperty);
    displayProperty(getProperty);
}

//Replace all data in template then put this template in the main section
const displayProperty = (item) => {
    template_property = property_id.innerHTML;

    template_property = template_property.replaceAll('${photo}', item.photos?.['0'].href ? item.photos?.['0'].href : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGoeZg06hhqGsjJ-DrxjgEmU5o7Jua2vB9Q&usqp=CAU');
    template_property = template_property.replaceAll('${agent}', item?.agent?.name ? item.agent.name : item.advertisers['0'].name);
    template_property = template_property.replaceAll('${prop_status}', moveUnderscore(item?.prop_status));
    template_property = template_property.replaceAll('${status}', item?.status);
    template_property = template_property.replaceAll('${type}', moveUnderscore(item?.prop_type));
    template_property = template_property.replaceAll('${beds}', item?.beds);
    template_property = template_property.replaceAll('${baths}', item?.baths);
    template_property = template_property.replaceAll('${lot_sqft}', item?.sqft ? item?.sqft : item?.lot_sqft);
    template_property = template_property.replaceAll('${price}', item?.price);
    template_property = template_property.replaceAll('${city}', item?.address.city);
    template_property = template_property.replaceAll('${country}', item?.address.country);
    template_property = template_property.replaceAll('${county}', item?.address.county);
    template_property = template_property.replaceAll('${neighborhood}', item?.neighborhood);
    template_property = template_property.replaceAll('${line}', item?.address.line);
    template_property = template_property.replaceAll('${postal_code}', item?.address.postal_code);
    template_property = template_property.replaceAll('${state}', item?.address.state);
    template_property = template_property.replaceAll('${agentName}', item?.advertisers['0'].name);
    template_property = template_property.replaceAll('${agentPhone}', item?.advertisers['0'].phone);
    template_property = template_property.replaceAll('${agentEmail}', item?.advertisers['0'].email);
    template_property = template_property.replaceAll('${descriptionShort}', item?.description.substring(0, 50));
    template_property = template_property.replaceAll('${description}', item?.description);
    template_property = template_property.replaceAll('${lat}', item.address.lat);
    template_property = template_property.replaceAll('${long}', item.address.long);

    placeForTemplate.innerHTML = template_property;

    
    //Show all images
    let allImages = item.photos;

    allImages.forEach(img => {
        images_place_id.innerHTML += `<img src="${img.href}" />`;
    });

    pictures = document.querySelectorAll('#images_place_id img');

}


//Functions for the image slider
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

//Function for hide and show the description. The button text is allso change.
const descriptionBtn = (btn) => {
    let title = btn.innerText;
    let parentBtn = btn.closest('.description');
    let shortDes = parentBtn.querySelector('.descriptionShort');
    let longDesc = parentBtn.querySelector('.descriptionLong');
    
    if(title === 'Show More') {
        btn.innerText = 'Show Less';
        shortDes.style.display = 'none';
        longDesc.style.display = 'block';
    } else {
        btn.innerText = 'Show More';
        longDesc.style.display = 'none';
        shortDes.style.display = 'block';
    }
}

//Function for replace the underscore with the empty space
const moveUnderscore = (underscore) => {
    underscore = underscore.replaceAll('_', ' ');

    return underscore;
}

getProperty();