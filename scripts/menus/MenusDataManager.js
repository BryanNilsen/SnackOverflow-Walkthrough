/**
 * This module is responsible for all fetch calls to the
 * Snack Overflow API to get the menu items data
*/

export const getMenuItems = () => {
    return fetch("https://snackoverflow-api.herokuapp.com/items")
        .then(response => response.json())
        .then(menuItemsFromAPI => {
            console.log(menuItemsFromAPI)
            return menuItemsFromAPI
        })
}


