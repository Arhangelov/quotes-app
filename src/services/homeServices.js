const url = "https://api.api-ninjas.com/v1/quotes?category=";

export const getQuoteService = (category) => {
    return fetch(url + `${category}`, {
        method: "GET",
        headers: {"X-Api-Key" : "DV+56IrmtFnEV42uBevulw==wnFeCFbztryYek0V" ,"Content-Type" : "application/json"},
    }).then(res => res.json());
};