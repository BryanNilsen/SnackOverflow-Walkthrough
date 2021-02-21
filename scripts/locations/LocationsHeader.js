/**
 * @file Responsible for rendering all of the Menu header components
*/

import { LocationsFilter } from "./LocationsFilter.js"


export const LocationsHeader = () => {
    // Set page title
    const titleTarget = document.getElementById("page-title")
    titleTarget.innerHTML = "Locations"

    // Set page filter
    LocationsFilter()
}