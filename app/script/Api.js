class Api{
    constructor(){
        this.prop_id = '';

        this.fetchPropertiesForSale();
        this.fetchPropertiesForRent();
        this.getPropertyById(this.prop_id); 
    }

    async fetchPropertiesForSale() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f66eaf9950msh601064ac00e4178p13ef1ajsn74b5ed0d55fc',
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch('https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=100&sort=relevance', options);
            const data = await response.json();
            let listings = data.listings;

            return listings;

        } catch(e) {
            console.log(e);
        }
    }

    async fetchPropertiesForRent() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f66eaf9950msh601064ac00e4178p13ef1ajsn74b5ed0d55fc',
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch('https://realty-in-us.p.rapidapi.com/properties/list-for-rent?state_code=NY&city=New%20York%20City&limit=100&offset=0&sort=relevance', options);
            const data = await response.json();
            let listings = data.listings;

            return listings;

        } catch(e) {
            console.log(e);
        }
    }

    async getPropertyById(prop_id) {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f66eaf9950msh601064ac00e4178p13ef1ajsn74b5ed0d55fc',
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(`https://realty-in-us.p.rapidapi.com/properties/detail?listing_id=608763437&prop_status=for_sale&property_id=${prop_id}`, options);
            const data = await response.json();
            let listing = data.listing;

            return listing;
        } catch(e) {
            console.log(e);
        }
        
    } 
}



/* https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyAfrTNx21m1BpOFe12uPZsCof8An3TKutk
 */


