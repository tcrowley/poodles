import { Litter, Pup } from "models/puppy.model";

function handleErrors(response) {
    if (!response.ok) {
        return Promise.reject(response);
    }
    return response;
}

const puppiesService = {
    getAvailablePuppies(): Promise<{ puppies: Pup[] }> {
        return fetch('https://pamperedpoodles4u.com/PHP/api/availablePuppies.php')
            .then(handleErrors)
            .then(response => response.json());
    },

    getPuppy(id): Promise<{ puppy: Pup | null }> {
        return fetch(`https://pamperedpoodles4u.com/PHP/api/puppy.php?id=${id}`)
          .then(handleErrors)
          .then(response => response.json());
    },

    getLitter(id): Promise<{ litter: Litter | null }> {
        return fetch(`https://pamperedpoodles4u.com/PHP/api/litter.php?id=${id}`)
          .then(handleErrors)
          .then(response => response.json());
    },
}

export default puppiesService;
