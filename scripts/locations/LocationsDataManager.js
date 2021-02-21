/**
 * This module is responsible for all fetch calls to the
 * Snack Overflow API to get the locations data
*/

export const getLocations = () => {
    return fetch("https://snackoverflow-api.herokuapp.com/locations")
        .then(response => response.json())
        .then(locationsFromAPI => {
            console.log(locationsFromAPI)
            return locationsFromAPI
        })
}


