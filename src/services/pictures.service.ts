
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

const picturesSerice = {
    getCount() {
        return fetch('https://pamperedpoodles4u.net/PHP/api/pictureCount.php')
            .then(handleErrors)
            .then(response => response.json())
            .catch(error => console.log(error) );
    }
}

export default picturesSerice;
