class Api{
    constructor(){

        this.fetchPropertiesForSale();
        this.fetchPropertiesForRent();
    }

    async fetchPropertiesForSale() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3819bbdfbemsh728d704970277e1p165420jsn747a79b95703',
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch('https://realty-in-us.p.rapidapi.com/properties/list-for-sale?state_code=NY&city=New%20York%20City&offset=0&limit=200&sort=relevance', options);
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
                'X-RapidAPI-Key': '3819bbdfbemsh728d704970277e1p165420jsn747a79b95703',
                'X-RapidAPI-Host': 'realty-in-us.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch('https://realty-in-us.p.rapidapi.com/properties/v2/list-for-rent?city=New%20York%20City&state_code=NY&limit=200&offset=0&sort=relevance', options);
            const data = await response.json();
            let properties = data.properties;

            return properties;

        } catch(e) {
            console.log(e);
        }
    }
}






