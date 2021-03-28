import { Adult } from "../models/adult.model";

function handleErrors(response) {
  if (!response.ok) {
    return Promise.reject(response);
  }
  return response;
}

const adultsService = {
  getAdults(): Promise<{ adults: Adult[] }> {
    return fetch('https://pamperedpoodles4u.com/PHP/api/adults.php')
      .then(handleErrors)
      .then(response => response.json());
  },

  getAdult(id): Promise<{ adult: Adult | null }> {
    return fetch(`https://pamperedpoodles4u.com/PHP/api/adult.php?id=${id}`)
      .then(handleErrors)
      .then(response => response.json());
  }
}

export default adultsService;
