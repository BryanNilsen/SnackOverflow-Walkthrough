/**
 * @file Manages the functionalities of the LocationsFilter select component
 * responsible for getting all locations and rendering a select menu to the DOM
 * with a unique list of states
*/

import { getLocations } from "./LocationsDataManager.js"

export const LocationsFilter = () => {
    getLocations()
        .then((locationsArray) => {
            const statesArray = [...new Set(locationsArray.map(location => location.state))]
            return render(statesArray)
        })
}

const render = (statesArray) => {
    const contentTarget = document.getElementById("page-filter")
    const categoryOptions = statesArray.map(state => {
        return `
        <option value="${state}">${state}</option>
        `
    }).join("")

    contentTarget.innerHTML = `
    <strong>Filter by: </strong>
    <select id="location-select">
        <option value="0">All States</option>
        ${categoryOptions}
    </select>
    `
}


/**
 * eventHub gets reference to the body element in index.html
 * will be used for responding to user-generated events
 */
const eventHub = document.querySelector("body")

/**
 * Listen for "change" event and IF the element changed
 * is the location-select link, then get the selected option value
 * and dispatch that in a custom event
 */
eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "location-select") {
        const selectedOptionValue = changeEvent.target.value
        const customEvent = new CustomEvent("LocationStateSelected", {
            detail: {
                selectedState: selectedOptionValue,
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})