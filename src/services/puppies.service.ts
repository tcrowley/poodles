
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const puppiesService = {
    getAvailablePuppies() {
        return fetch('https://pamperedpoodles4u.net/PHP/api/availablePuppies.php')
            .then(handleErrors)
            .then(response => response.json())
            .catch(error => console.log(error) );
    }
}

export default puppiesService;
