import { Adult } from "../models/adult.model";

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const adultsService = {
    getAdults(): Promise<{ adults: Adult[] }> {
        return fetch('https://pamperedpoodles4u.net/PHP/api/adults.php')
            .then(handleErrors)
            .then(response => response.json())
            .catch(error => console.log(error) );
    },

    getAdult(id): Promise<Adult> {
        return fetch(`https://pamperedpoodles4u.net/PHP/api/adult.php?id=${id}`)
            .then(handleErrors)
            .then(response => response.json())
            .catch(error => console.log(error) );
    }
}

export default adultsService;
