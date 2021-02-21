/**
 * @file Manages the functionalities of the Locations page
*/

import { getLocations } from "./LocationsDataManager.js"
import { LocationCard } from "./LocationCard.js"

/**
 * Responsible for getting locations and passing them
 * into the render function
 */
export const LocationsPage = () => {
    getLocations()
        .then((locationData) => {
            render(locationData)
        })
}

/**
 * Responsible for iterating an array of locations and
 * rendering HTML representation to DOM
 * @param {array} locationsArray - an array of locations
*/
const render = (locationsArray) => {
    // Iterate locations array and make HTML string representation for each
    let locationsHTML = locationsArray.map(item => LocationCard(item)).join("")

    // Get reference to DOM element in which to insert locationsHTML representation
    const contentTarget = document.querySelector("main")

    // render locationsHTML representation to DOM
    contentTarget.innerHTML = locationsHTML
}



/**
 * eventHub gets reference to the body element in index.html
 * will be used for responding to user-generated events
 */
const eventHub = document.querySelector("body")

/**
 * Listen for "click" event and IF the element clicked
 * is the locations-nav link, then call the MenusPage component
 */
eventHub.addEventListener("click", event => {
    if (event.target.id === "locations-nav") {
        LocationsPage()
    }
})