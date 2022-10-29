class Api {
    constructor() {

        this.fetchProperties();
    }

    async fetchProperties() {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '3819bbdfbemsh728d704970277e1p165420jsn747a79b95703',
                'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch('https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4', options);
            const data = await response.json();
            let hits = data.hits;

            return hits;

        } catch(e) {
            console.log(e);
        }
    }


}






