
function handleErrors(response) {
    if (!response.ok) {
        return Promise.reject(response);
    }
    return response;
}

const puppiesService = {
    getAvailablePuppies() {
        return fetch('https://pamperedpoodles4u.net/PHP/api/availablePuppies.php')
            .then(handleErrors)
            .then(response => response.json());
    }
}

export default puppiesService;
