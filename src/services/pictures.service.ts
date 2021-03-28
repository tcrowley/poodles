
function handleErrors(response) {
    if (!response.ok) {
        return Promise.reject(response);
    }
    return response;
}

const picturesService = {
    getCount() {
        return fetch('https://pamperedpoodles4u.com/PHP/api/pictureCount.php')
            .then(handleErrors)
            .then(response => response.json());
    }
}

export default picturesService;
